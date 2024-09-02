import express, { Request, Response } from "express";
import prisma from "../prisma";
import passport from "passport";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";
import { isAuthenticated } from "../middleware/auth";

const router = express.Router();

/**
 * @description Test route
 * @route GET /users/hello
 * @access Public
 */
router.get("/hello", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

/**
 * @description Get all users
 * @route GET /users
 * @access Public
 */
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch users" });
  }
});

/**
 * @description Get a user by ID
 * @route GET /users/:id
 * @access Public
 */
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch user" });
  }
});

/**
 * @description Register a new user
 * @route POST /users/register
 * @access Public
 */
router.post("/register", async (req: Request, res: Response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log("req.body:", req.body);
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        password: hashedPassword,
      },
    });
    console.log("req.user11:", user);
    res.json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Unable to register user" });
  }
});

/**
 * @description Login user
 * @route POST /users/login
 * @access Public
 */
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in the environment variables");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Set the token as an HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.json({
      message: "Logged in successfully",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to log in" });
  }
});

/**
 * @description Logout user
 * @route GET /users/logout
 * @access Private
 */
router.get("/logout", isAuthenticated, (req: Request, res: Response) => {
  req.logout((error) => {
    if (error) {
      return res.status(500).json({ error: "Unable to logout" });
    }
    res.json({ message: "Logged out successfully" });
  });
});

/**
 * @description Get current user
 * @route GET /users/me
 * @access Private
 */
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  (req: Request, res: Response) => {
    const user = req.user as User;
    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  }
);

export default router;

import express, { Request, Response } from "express";
import prisma from "../prisma";
import passport from "passport";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

/**
 * @description Get all users
 * @route GET /users
 * @access Public
 */
router.get("/users", async (req: Request, res: Response) => {
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
router.get("/users/:id", async (req: Request, res: Response) => {
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
 * @route POST /register
 * @access Public
 */
router.post("/register", async (req: Request, res: Response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        password: hashedPassword,
      },
    });
    res.json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Unable to register user" });
  }
});

/**
 * @description Login user
 * @route POST /login
 * @access Public
 */
router.post(
  "/login",
  passport.authenticate("local"),
  (req: Request, res: Response) => {
    res.json({ message: "Logged in successfully" });
  }
);

/**
 * @description Logout user
 * @route GET /logout
 * @access Private
 */
router.get("/logout", (req: Request, res: Response) => {
  req.logout((error) => {
    if (error) {
      return res.status(500).json({ error: "Unable to logout" });
    }
    res.json({ message: "Logged out successfully" });
  });
});

export default router;

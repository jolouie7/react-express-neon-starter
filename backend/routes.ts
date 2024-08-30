import express, { Request, Response } from "express";
import prisma from "./prisma";

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
 * @description Create a new user
 * @route POST /users
 * @access Public
 */
router.post("/users", async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Unable to create user" });
  }
});

export default router;

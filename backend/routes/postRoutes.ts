import express, { Request, Response } from "express";
import prisma from "../prisma";
import { isAuthenticated } from "../middleware/auth";

const router = express.Router();

/**
 * @description Get all posts
 * @route GET /posts
 * @access Private
 */
router.get("/posts", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch posts" });
  }
});

/**
 * @description Create a new post
 * @route POST /posts
 * @access Private
 */
router.post("/posts", isAuthenticated, async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const post = await prisma.post.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        authorId: req.user.id,
      },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Unable to create post" });
  }
});

export default router;
export default router;

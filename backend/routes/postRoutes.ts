import express, { Request, Response } from "express";
import prisma from "../prisma";
import { isAuthenticated } from "../middleware/auth";
import { User } from "@prisma/client";

const router = express.Router();

/**
 * @description Get all posts
 * @route GET /posts
 * @access Private
 */
router.get("/", isAuthenticated, async (req: Request, res: Response) => {
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
router.post("/", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const user = req.user as User;
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const post = await prisma.post.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        authorId: user.id,
      },
    });

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Unable to create post" });
  }
});

/**
 * @description Update a post by ID
 * @route PUT /posts/:id
 * @access Private
 */
router.put("/:id", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const user = req.user as User;
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const post = await prisma.post.update({
      where: { id: req.params.id, authorId: user.id },
      data: {
        title: req.body.title,
        content: req.body.content,
      },
    });

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Unable to update post" });
  }
});

/**
 * @description Delete a post by ID
 * @route DELETE /posts/:id
 * @access Private
 */
router.delete("/:id", isAuthenticated, async (req: Request, res: Response) => {
  try {
    const user = req.user as User;
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    await prisma.post.delete({
      where: { id: req.params.id, authorId: user.id },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Unable to delete post" });
  }
});

export default router;

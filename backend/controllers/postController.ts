// Controllers handle business logic
import { Request, Response } from "express";
import prisma from "../prisma";
import { User } from "@prisma/client";

export const postController = {
  getAllPosts: async (req: Request, res: Response) => {
    try {
      const posts = await prisma.post.findMany();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Unable to fetch posts" });
    }
  },

  createPost: async (req: Request, res: Response) => {
    try {
      const user = req.user as User;
      const post = await prisma.post.create({
        data: {
          ...req.body,
          userId: user.id
        }
      });
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: "Unable to create post" });
    }
  },

  getPostById: async (req: Request, res: Response) => {
    try {
      const post = await prisma.post.findUnique({
        where: { id: req.params.id }
      });
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Unable to fetch post" });
    }
  },

  updatePost: async (req: Request, res: Response) => {
    try {
      const user = req.user as User;
      const post = await prisma.post.findUnique({
        where: { id: req.params.id }
      });

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      if (post.authorId !== user.id) {
        return res.status(403).json({ error: "Not authorized to update this post" });
      }

      const updatedPost = await prisma.post.update({
        where: { id: req.params.id },
        data: req.body
      });

      res.json(updatedPost);
    } catch (error) {
      res.status(500).json({ error: "Unable to update post" });
    }
  },

  deletePost: async (req: Request, res: Response) => {
    try {
      const user = req.user as User;
      const post = await prisma.post.findUnique({
        where: { id: req.params.id }
      });

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      if (post.authorId !== user.id) {
        return res.status(403).json({ error: "Not authorized to delete this post" });
      }

      await prisma.post.delete({
        where: { id: req.params.id }
      });

      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Unable to delete post" });
    }
  }
};
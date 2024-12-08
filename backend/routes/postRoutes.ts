import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { postController } from "../controllers/postController";

const router = express.Router();

/**
 * @description Get all posts
 * @route GET /posts
 * @access Private
 */
router.get("/", isAuthenticated, postController.getAllPosts);

/**
 * @description Get a post by ID
 * @route GET /posts/:id
 * @access Private
 */
router.get("/:id", isAuthenticated, postController.getPostById);

/**
 * @description Create a new post
 * @route POST /posts
 * @access Private
 */
router.post("/", isAuthenticated, postController.createPost);

/**
 * @description Update a post by ID
 * @route PUT /posts/:id
 * @access Private
 */
router.put("/:id", isAuthenticated, postController.updatePost);

/**
 * @description Delete a post
 * @route DELETE /posts/:id
 * @access Private
 */
router.delete("/:id", isAuthenticated, postController.deletePost);

export default router;

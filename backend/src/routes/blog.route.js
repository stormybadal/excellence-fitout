import { Router } from "express";

// Middleware
import { verifyJwt } from "../middlewares/auth.middleware.js";

// Controllers
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
} from "../controllers/blog.controller.js";

const router = Router();

// Public routes
router.route("/").post(createBlog);
router.route("/").get(getAllBlogs);

router.route("/:id").get(getBlog);

// Private routes
router.route("/:id").put(verifyJwt, updateBlog).delete(verifyJwt, deleteBlog);

export default router;

import { Router } from "express";

// Middleware
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { uploadSingle } from "../middlewares/upload.middleware.js";

// Controllers
import { create, fetch, fetchAll, kill, update } from "../controllers/blog.controller.js";

const router = Router();

// Public routes
router.route("/").post(verifyJwt, uploadSingle("image"), create);
router.route("/").get(fetchAll);

router.route("/:id").get(fetch);

// Private routes
router.route("/:id").put(verifyJwt, update).delete(verifyJwt, kill);

export default router;

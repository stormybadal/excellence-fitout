import { Router } from "express";

// Middleware
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { uploadSingle } from "../middlewares/upload.middleware.js";

// Controllers
import { create, fetch, fetchAll, remove } from "../controllers/gallery.controller.js";

const router = Router();

// Public routes
router.route("/").get(fetchAll);
router.route("/:id").get(fetch);

// Private routes
router.route("/").post( uploadSingle("image"), create);
router.route("/:id").delete(remove);

export default router;

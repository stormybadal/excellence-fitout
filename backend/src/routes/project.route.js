import { Router } from "express";

// Middleware
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { uploadSingle } from "../middlewares/upload.middleware.js";

// Controllers
import {
    create,
    fetch,
    fetchAll,
    remove,
    updateImage,
    updateInfo,
} from "../controllers/project.controller.js";

const router = Router();

// Public routes
router.route("/").get(fetchAll);
router.route("/:id").get(fetch);

// Private routes (require authentication)
router.route("/").post(uploadSingle("image"), create);
router.route("/:id").patch(updateInfo);
router.route("/:id").delete(remove);
router.route("/:id/image").patch(uploadSingle("image"), updateImage);

export default router;

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
  updatePublish,
} from "../controllers/blog.controller.js";

const router = Router();

// Public routes
router.route("/").post(verifyJwt, uploadSingle("image"), create);
router.route("/").get(fetchAll);

router.route("/:id").get(fetch);

// Private routes
router.route("/:id").patch(verifyJwt, updateInfo).delete(verifyJwt, remove);
router.route("/:id/image").patch(verifyJwt, uploadSingle("image"), updateImage);
router.route("/:id/publish").patch(verifyJwt, updatePublish);

export default router;

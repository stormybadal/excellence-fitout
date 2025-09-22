import { Router } from "express";

// Middleware
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { uploadSingle } from "../middlewares/upload.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";

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

// Validators
import {
  createBlogSchema,
  updateBlogInfoSchema,
  updateBlogPublishSchema,
} from "../validators/blog.validator.js";

const router = Router();

// Public routes
router.route("/").post(verifyJwt, uploadSingle("image"), validate(createBlogSchema), create);
router.route("/").get(fetchAll);

router.route("/:id").get(fetch);

// Private routes
router
  .route("/:id")
  .patch(validate(updateBlogInfoSchema), updateInfo)
  .delete(remove);
router.route("/:id/image").patch(verifyJwt, uploadSingle("image"), updateImage);
router.route("/:id/publish").patch(verifyJwt, validate(updateBlogPublishSchema), updatePublish);

export default router;

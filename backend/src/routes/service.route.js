import { Router } from "express";

// Middleware
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { uploadMultiple } from "../middlewares/upload.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";

// Controllers
import {
  create,
  fetch,
  fetchAll,
  fetchCategories,
  remove,
  updateImages,
  updateInfo,
} from "../controllers/service.controller.js";

// Validators
import { createServiceSchema, updateServiceInfoSchema } from "../validators/service.validator.js";

const router = Router();

// Public routes
router
  .route("/")
  .post( uploadMultiple("images", 6), validate(createServiceSchema), create);
router.route("/").get(fetchAll);

router.route("/category").get(fetchCategories);

router.route("/:id").get(fetch);

// Private routes
router
  .route("/:id")
  .patch(validate(updateServiceInfoSchema), updateInfo)
  .delete(remove);
router.route("/:id/images").patch(uploadMultiple("images", 6), updateImages);

export default router;

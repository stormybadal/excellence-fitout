import { Router } from "express";

// Middleware
import { verifyJwt } from "../middlewares/auth.middleware.js";

// Controllers
import {
  createService,
  deleteService,
  getAllServices,
  getService,
  updateService,
} from "../controllers/service.controller.js";

const router = Router();

// Public routes
router.route("/").post(createService);
router.route("/").get(getAllServices);

router.route("/:id").get(getService);

// Private routes
router.route("/:id").put(verifyJwt, updateService).delete(verifyJwt, deleteService);

export default router;

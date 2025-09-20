import { Router } from "express";

// Middleware
import { verifyJwt } from "../middlewares/auth.middleware.js";

// Controllers
import {
  create,
  fetch,
  fetchAll,
  remove,
  updateService,
} from "../controllers/service.controller.js";

const router = Router();

// Public routes
router.route("/").post(create);
router.route("/").get(fetchAll);

router.route("/:id").get(fetch);

// Private routes
router.route("/:id").put(verifyJwt, updateService).delete(verifyJwt, remove);

export default router;

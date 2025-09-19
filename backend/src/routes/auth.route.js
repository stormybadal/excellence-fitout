import { Router } from "express";

// Middleware
import { verifyJwt } from "../middlewares/auth.middleware.js";

// Controllers
import { login, logout, refreshAccessToken } from "../controllers/auth.controller.js";

const router = Router();

// Public routes
router.route("/login").post(login);

// Private routes
router.route("/logout").post(verifyJwt, logout);
router.route("/refresh").post(verifyJwt, refreshAccessToken);

export default router;

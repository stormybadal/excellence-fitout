import { Router } from "express";

const router = Router();

// Public routes
router.route("/in").post(login);

// Private routes
router.route("/logout").post(verifyJwt, logout);

export default router;

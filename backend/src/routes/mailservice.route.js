import { Router } from "express";

// Controllers
import { submitContactForm } from "../controllers/mailservice.controller.js";

const router = Router();

// Public routes
router.route("/contact").post(submitContactForm);

export default router;

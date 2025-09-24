import express from "express";

// Middlewares
import cookieParser from "cookie-parser";
import cors from "cors";

// Routers
import authRouter from "./routes/auth.route.js";
import dashboardRouter from "./routes/dashboard.route.js";
import blogRouter from "./routes/blog.route.js";
import serviceRouter from "./routes/service.route.js";
import projectRouter from "./routes/project.route.js";
import mailServiceRouter from "./routes/mailservice.route.js";
import galleryRouter from "./routes/gallery.route.js";

/**
 * @module app
 * Sets up and exports the configured Express application.
 *
 * Middleware:
 * - CORS (with credentials and origin from environment)
 * - JSON and URL-encoded payload parsing (16kb limit)
 * - Static file serving from /public
 * - Cookie parsing
 *
 * - Routes declarations
 */

const app = express();

// Configure CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  }),
);

// Configure express middlewares
app.use(express.json()); // accept json
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes declaration
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/dashboard", dashboardRouter);
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/service", serviceRouter);
app.use("/api/v1/project", projectRouter);
app.use("/api/v1/mail", mailServiceRouter);
app.use("/api/v1/gallery", galleryRouter);

export { app };

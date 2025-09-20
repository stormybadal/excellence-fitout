// Utils
import { ApiError } from "../utils/apiError.util.js";
import { ApiResponse } from "../utils/apiResponse.util.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { uploadOnCloudinary } from "../utils/cloudinary.util.js";

// Repositories
import { projectRepo } from "../repositories/project.repo.js";

/**
 * @module controllers/project
 * Controllers for project related operations
 *
 * Includes:
 * - create: Create a new project
 * - fetchAll: Get all projects with pagination and filtering
 * - fetch: Get project by id
 * - updateInfo: Update project info by id
 * - updateImage: Update project image by id
 * - updateStatus: Update project status by id
 * - remove: Delete project by id
 */

// Create new project
export const create = asyncHandler(async (req, res) => {
    if (!req.file) {
        throw new ApiError(400, "Image is missing. Please upload a valid image and try again.");
    }

    // Upload single image
    const cloudinaryRes = await uploadOnCloudinary(req.file.path, "uploads/projects");

    // Create project
    const project = await projectRepo.insert({
        ...req.body,
        image: cloudinaryRes.secure_url,
    });

    res.status(200).json(new ApiResponse(200, project, "Project created successfully!"));
});

// Get all projects with pagination
export const fetchAll = asyncHandler(async (req, res) => {
    // Parse query params
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (page <= 0 || limit <= 0) {
        throw new ApiError(400, "Page and limit must be positive integers.");
    }

    const data = await projectRepo.findAll({ page, limit });

    res.status(200).json(new ApiResponse(200, data, "All projects fetched successfully!"));
});

// Get project by id
export const fetch = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const project = await projectRepo.findById(id);

    if (!project) {
        throw new ApiError(404, "Project not found. Please try again.");
    }

    res.status(200).json(new ApiResponse(200, project, "Project details fetched successfully!"));
});

// Update project info by id
export const updateInfo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { projectName, shortDescription, location, duration, details } = req.body;

    if (!projectName && !shortDescription && !location && !duration && !details) {
        throw new ApiError(400, "No valid fields provided for update.");
    }

    const updatedProject = await projectRepo.update(id, {
        projectName,
        shortDescription,
        location,
        duration,
        details
    });

    if (!updatedProject) {
        throw new ApiError(404, "Project not found.");
    }

    res.status(200).json(new ApiResponse(200, updatedProject, "Project details updated successfully!"));
});

// Update project image by id
export const updateImage = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!req.file) {
        throw new ApiError(400, "Image is missing. Please upload a valid image.");
    }

    const cloudinaryRes = await uploadOnCloudinary(req.file.path, "uploads/projects");

    const updatedProject = await projectRepo.update(id, { image: cloudinaryRes.secure_url });

    if (!updatedProject) {
        throw new ApiError(404, "Project not found.");
    }

    res.status(200).json(new ApiResponse(200, updatedProject, "Project image updated successfully!"));
});

// Delete project by id
export const remove = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const project = await projectRepo.delete(id);

    if (!project) {
        throw new ApiError(404, "Project not found. Please try again.");
    }

    res.status(200).json(new ApiResponse(200, project, "Project deleted successfully!"));
});

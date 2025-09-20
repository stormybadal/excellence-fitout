// Utils
import { ApiError } from "../utils/apiError.util.js";
import { ApiResponse } from "../utils/apiResponse.util.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { uploadOnCloudinary } from "../utils/cloudinary.util.js";

// Repositories
import { galleryRepo } from "../repositories/gallery.repo.js";

/**
 * @module controllers/gallery
 * Controllers for gallery related operations
 *
 * Includes:
 * - create: Upload & add a new gallery image
 * - fetchAll: Get all gallery images with pagination
 * - fetch: Get gallery image by id
 * - remove: Delete gallery image by id
 */

// Upload and create new gallery image
export const create = asyncHandler(async (req, res) => {
    if (!req.file) {
        throw new ApiError(400, "Image is missing. Please upload a valid image.");
    }

    // Upload image to Cloudinary
    const cloudinaryRes = await uploadOnCloudinary(req.file.path, "uploads/gallery");

    // Save to DB
    const galleryImage = await galleryRepo.insert({
        imageUrl: cloudinaryRes.secure_url,
    });

    res
        .status(201)
        .json(new ApiResponse(201, galleryImage, "Gallery image uploaded successfully!"));
});

// Get all gallery images with pagination
export const fetchAll = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (page <= 0 || limit <= 0) {
        throw new ApiError(400, "Page and limit must be positive integers.");
    }

    const data = await galleryRepo.findAll({ page, limit });

    res
        .status(200)
        .json(new ApiResponse(200, data, "All gallery images fetched successfully!"));
});

// Get single gallery image by id
export const fetch = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const galleryImage = await galleryRepo.findById(id);

    if (!galleryImage) {
        throw new ApiError(404, "Gallery image not found. Please try again.");
    }

    res
        .status(200)
        .json(new ApiResponse(200, galleryImage, "Gallery image fetched successfully!"));
});

// Delete gallery image by id
export const remove = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const galleryImage = await galleryRepo.delete(id);

    if (!galleryImage) {
        throw new ApiError(404, "Gallery image not found. Please try again.");
    }

    res
        .status(200)
        .json(new ApiResponse(200, galleryImage, "Gallery image deleted successfully!"));
});

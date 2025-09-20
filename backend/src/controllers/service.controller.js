// Utils
import { ApiError } from "../utils/apiError.util.js";
import { ApiResponse } from "../utils/apiResponse.util.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { uploadManyOnCloudinary } from "../utils/cloudinary.util.js";

// Repositories
import { serviceRepo } from "../repositories/service.repo.js";

// Create new blog
export const create = asyncHandler(async (req, res) => {
  if (!req.files || req.files.length === 0) {
    throw new ApiError(400, "Please upload at least one image for the service.");
  }

  // Upload all images to Cloudinary
  const uploadedImages = await uploadManyOnCloudinary(req.files, "services");

  // Create service
  const service = await serviceRepo.insert({
    ...req.body,
    images: uploadedImages.map((img) => img.secure_url),
  });

  res.status(201).json(new ApiResponse(201, service, "Service created successfully!"));
});

// Get all services
export const fetchAll = asyncHandler(async (req, res) => {
  // Parse query params
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  if (page <= 0 || limit <= 0) {
    throw new ApiError(400, "Page and limit must be positive integers.");
  }

  const data = await serviceRepo.findAll({ page, limit });

  res.status(200).json(new ApiResponse(200, data, "All services fetched successfully!"));
});

// Get service by id
export const fetch = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Get service by id
  const service = await serviceRepo.findById(id);

  if (!service) {
    throw new ApiError(404, "Service not found. Please try again.");
  }

  res.status(200).json(new ApiResponse(200, service, "Service details fetched successfully!"));
});

// Update service by id
export const updateInfo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updateData = { ...req.body };

  // Ensure something is being updated
  if (Object.keys(updateData).length === 0) {
    throw new ApiError(400, "No valid fields provided for update.");
  }

  // Update service
  const updatedService = await serviceRepo.update(id, updateData);

  if (!updatedService) {
    throw new ApiError(404, "Service not found.");
  }

  res.status(200).json(new ApiResponse(200, updatedService, "Service info updated successfully!"));
});

// Update service images by id
export const updateImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { removeImages } = req.body; // array of URLs to remove

  // Find the service first
  const service = await serviceRepo.findById(id);
  if (!service) throw new ApiError(404, "Service not found. Please try again.");

  // Remove requested images
  let currentImages = service.images || [];
  if (removeImages && Array.isArray(removeImages)) {
    currentImages = currentImages.filter((img) => !removeImages.includes(img));
  }

  // Upload new images if any
  let newImages = [];
  if (req.files && req.files.length > 0) {
    newImages = await uploadManyOnCloudinary(req.files, "services");
    newImages = newImages.map((img) => img.secure_url);
  }

  // Merge and validate
  const finalImages = [...currentImages, ...newImages];
  if (finalImages.length < 2) {
    throw new ApiError(400, "A service must have at least 2 images.");
  }
  if (finalImages.length > 6) {
    throw new ApiError(400, "You can upload a maximum of 6 images per service.");
  }

  // Save to DB
  service.images = finalImages;
  await service.save();

  res.status(200).json(new ApiResponse(200, service, "Service images updated successfully!"));
});

// Delete service by id
export const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Delete service by id
  const service = await serviceRepo.delete(id);

  if (!service) {
    throw new ApiError(404, "Service not found. Please try again.");
  }

  res.status(200).json(new ApiResponse(200, service, "Service deleted successfully!"));
});

// Utils
import { ApiError } from "../utils/apiError.util.js";
import { ApiResponse } from "../utils/apiResponse.util.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { uploadOnCloudinary } from "../utils/cloudinary.util.js";

// Validators
import { blogSchema } from "../validators/blog.validator.js";

// Reporitories
import { blogRepo } from "../repositories/blog.repo.js";

// Create new blog
export const create = asyncHandler(async (req, res) => {
  // Validate blog data
  const parsed = blogSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new ApiError(
      400,
      `Zod validation error. ERR: ${parsed.error.issues.map((i) => i.message).join(", ")}`,
    );
  }

  if (!req.file) {
    throw new ApiError(400, "Image is missing. Please upload a valid image and try again.");
  }

  // Upload image
  const cloudinaryRes = await uploadOnCloudinary(req.file.path);

  // Create blog
  const blog = await blogRepo.insert({
    ...parsed.data,
    image: cloudinaryRes.secure_url, // Cloudinary URL
  });

  res.status(200).json(new ApiResponse(200, blog, "Blog created successfully!"));
});

// Get all blogs
export const fetchAll = asyncHandler(async (req, res) => {
  // Get all blogs
});

// Get blog by id
export const fetch = asyncHandler(async (req, res) => {
  // Get blog by id
});

// Update blog by id
export const update = asyncHandler(async (req, res) => {
  // Update blog by id
});

// Delete blog by id
export const kill = asyncHandler(async (req, res) => {
  // Delete blog by id
});

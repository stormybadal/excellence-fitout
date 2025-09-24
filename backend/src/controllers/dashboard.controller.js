import { ApiError } from "../utils/apiError.util.js";
import { ApiResponse } from "../utils/apiResponse.util.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import {projectRepo} from "../repositories/project.repo.js";
import {serviceRepo} from "../repositories/service.repo.js";
import {blogRepo} from "../repositories/blog.repo.js";
import {galleryRepo} from "../repositories/gallery.repo.js";

export const getDashboardStats = asyncHandler(async (req, res) => {
  try {
    const [projects, services, blogs, gallery] = await Promise.all([
      projectRepo.countDocuments(),
      serviceRepo.countDocuments(),
      blogRepo.countDocuments(),
      galleryRepo.countDocuments(),
    ]);

    const data = { projects, services, blogs, gallery };

    res
      .status(200)
      .json(new ApiResponse(200, data, "Dashboard stats fetched successfully!"));
  } catch (error) {
    throw new ApiError(500, "Failed to fetch dashboard stats");
  }
});

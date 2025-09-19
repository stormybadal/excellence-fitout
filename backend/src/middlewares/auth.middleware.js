import jwt from "jsonwebtoken";

// Models
import { User } from "../models/user.model.js";

// Utils
import { ApiError } from "../utils/apiError.util.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";

/**
 * @module middlewares/auth
 * Middleware to verify and attach user to request object.
 *
 * @param {Object} req - Express request object.
 * @param {Function} next - Express next middleware function.
 */

export const verifyJwt = asyncHandler(async (req, _, next) => {
  try {
    // Get token from cookies or authorization header
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(400, "Unauthorized request!");
    }

    // Verify and decode token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Find user by decoded token ID
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

    if (!user) {
      throw new ApiError(401, "Invalid access token!");
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token!");
  }
});

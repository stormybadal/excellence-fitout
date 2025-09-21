import jwt from "jsonwebtoken";

// Utils
import { ApiError } from "../utils/apiError.util.js";
import { ApiResponse } from "../utils/apiResponse.util.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";

// Repositories
import { userRepo } from "../repositories/user.repo.js";

// Helper method to generate access & refresh tokens
const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await userRepo.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false }); // skip password validation

    return { accessToken, refreshToken };
  } catch (err) {
    throw new ApiError(500, "Could not generate access and refresh tokens!");
  }
};

// Set cookies options
const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "Strict",
};

export const register = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    throw new ApiError(400, "Fullname, email and password are required.");
  }

  const user = await userRepo.insert({ fullname, email, password });

  // Return response
  return res.status(201).json(new ApiResponse(201, user, "User registered successfully!"));
});

// Login user
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate email
  if (!email) {
    throw new ApiError(400, "Email is missing or invalid. Please check your email and try again.");
  }

  const user = await userRepo.findByEmail(email);
  if (!user) {
    throw new ApiError(404, "This email is not registered. Please check your email and try again.");
  }

  // Validate password
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(
      401,
      "Email or password is incorrect. Please check your credentials and try again.",
    );
  }

  // Generate tokens
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
  const loggedInUser = await userRepo.findById(user._id);

  // Sanitize user
  const sanatizedUser = {
    _id: loggedInUser._id,
    fullname: loggedInUser.fullname,
    email: loggedInUser.email,
  };

  // Return response
  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(new ApiResponse(200, sanatizedUser, "User logged in successfully!"));
});

// Logout user
export const logout = asyncHandler(async (req, res) => {
  if (!req.user || !req.user._id) {
    throw new ApiError(401, "Unauthorized request.");
  }

  // Unset refreshToken in the database
  await userRepo.update(req.user._id, { $unset: { refreshToken: 1 } }, { new: true });

  // Return response
  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new ApiResponse(200, {}, "User logged out successfully!"));
});

// Refresh 'access token'
export const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

  // Validate refresh token
  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request! Refresh token is required.");
  }

  try {
    // Verify the refresh token
    const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await userRepo.findById(decodedToken?._id);

    // Validate user and token
    if (!user || incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Invalid or expired refresh token!");
    }

    // Generate new tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

    // Send new tokens in cookies and response
    return res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json(
        new ApiResponse(200, { accessToken, refreshToken }, "Access token refreshed successfully!"),
      );
  } catch (err) {
    throw new ApiError(401, err?.message || "Failed to refresh 'access token'!");
  }
});

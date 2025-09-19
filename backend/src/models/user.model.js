import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

/**
 * @module models/user
 * Mongoose model for users.
 *
 * Includes:
 * - displayName: User's display name
 * - email: User's email
 * - password: User's password
 * - refreshToken: User's refresh token
 * - verification: User's verification token's metadata
 */
const userSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Password must be at least 8 characters long"],
    },
    refreshToken: {
      type: String,
    },
    verification: {
      code: { type: String },
      expiresAt: {
        type: Date,
        default: new Date(Date.now() + 15 * 60 * 1000), // 15 min
      },
    },
  },
  { timestamps: true },
);

// Encrypt password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip if password isn't modified

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generate access token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" },
  );
};

// Generate refresh token
userSchema.methods.generateRefreshToken = async function () {
  const token = jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
  this.refreshToken = token;
  return token;
};

export const User = mongoose.model("User", userSchema);

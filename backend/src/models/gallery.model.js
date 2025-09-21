import mongoose from "mongoose";

/**
 * @module models/galleryImage
 * Stores individual images for projects
 *
 * Fields:
 * - image: URL of the image
 */
const gallerySchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
  },
  {
    timestamps: true,
  },
);

export const Gallery = mongoose.model("Gallery", gallerySchema);

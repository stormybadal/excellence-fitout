import mongoose from "mongoose";

/**
 * @module models/galleryImage
 * Stores individual images for projects
 *
 * Fields:
 * - imageUrl: URL of the image
 * - createdAt / updatedAt: timestamps
 */

const gallerySchema = new mongoose.Schema(
    {

        imageUrl: {
            type: String,
            required: [true, "Image URL is required"],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export const GalleryImage = mongoose.model("Gallery", gallerySchema);

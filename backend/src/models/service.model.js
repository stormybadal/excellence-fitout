import mongoose from "mongoose";

/**
 * @module models/blog
 * Mongoose model for blogs.
 *
 * Includes:
 * - heading: Service main heading
 * - tagline: Tagline of the service for internal page
 * - subheading: Subheading of the service
 * - description: Description of the service
 * - features: Service's features []
 * - images: Service images url [] (min: 3, max: 6)
 * - category: Category of the service
 */
const serviceSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    tagline: {
      type: String,
      required: true,
      trim: true,
    },
    subheading: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    features: {
      type: [String],
      required: true,
      trim: true,
    },
    images: {
      type: [String], // URL
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true },
);

export const Service = mongoose.model("Service", serviceSchema);

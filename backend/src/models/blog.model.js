import mongoose from "mongoose";

/**
 * @module models/blog
 * Mongoose model for blogs.
 *
 * Includes:
 * - title: Blog's title
 * - content: Blog's content
 * - image: Blog's image
 * - tags: Blog's tags
 * - isPublished: Blog's publish status
 */
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String, // URL
      required: true,
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    isPublished: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

export const Blog = mongoose.model("Blog", blogSchema);

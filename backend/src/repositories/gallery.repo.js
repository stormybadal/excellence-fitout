import { Gallery } from "../models/gallery.model.js";

/**
 * @module repositories/gallery
 * Repository for standalone gallery images
 *
 * Includes:
 * - insert: Add a new image
 * - delete: Delete an image by id
 * - findById: Find an image by id
 * - findAll: Get all images with pagination
 */

export class GalleryRepo {
  constructor(model = Gallery) {
    this.model = model;
  }

  // Insert a new image
  async insert(data) {
    return await this.model.create(data);
  }

  // Find an image by its ID
  async findById(id) {
    return await this.model.findById(id);
  }

  // Delete an image by its ID
  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }

  // Fetch all images with pagination
  async findAll({ page = 1, limit = 10 } = {}) {
    const skip = (page - 1) * limit;

    const [entries, total] = await Promise.all([
      this.model
        .find()
        .sort({ createdAt: -1 }) // newest first
        .skip(skip)
        .limit(limit),
      this.model.countDocuments(),
    ]);

    return {
      entries,
      total,
      page,
      pages: Math.ceil(total / limit),
    };
  }
}

// Export an instance
export const galleryRepo = new GalleryRepo();

import { Service } from "../models/service.model.js";

/**
 * @module repositories/service
 * Repository for services related operations in the database
 *
 * Includes:
 * - insert: Insert a new entry in the database
 * - update: Update a entry in the database by id
 * - findById: Find a entry by id
 * - delete: Delete a entry by id
 * - findAll: Find all entries
 * - fetchCategories: Fetch all categories
 */
export class ServiceRepo {
  constructor(model = Service) {
    this.model = model;
  }

  async insert(data) {
    return await this.model.create(data);
  }

  async update(id, updateData) {
    return this.model.findByIdAndUpdate(id, updateData, { new: true });
  }

  async findById(id) {
    return await this.model.findById(id);
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }

  async findAll({ page = 1, limit = 10, category }) {
    const skip = (page - 1) * limit;

    const filter = {};
    if (category) {
      filter.category = category.toLowerCase().trim(); // normalize
    }

    const [entries, total] = await Promise.all([
      this.model
        .find(filter)
        .sort({ createdAt: -1 }) // newest first
        .skip(skip)
        .limit(limit),
      this.model.countDocuments(filter),
    ]);

    return {
      entries,
      total,
      page,
      pages: Math.ceil(total / limit),
    };
  }

  async fetchCategories() {
    return this.model.distinct("category");
  }
}

export const serviceRepo = new ServiceRepo(); // Service repository instance

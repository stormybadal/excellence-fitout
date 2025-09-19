import { User } from "../models/user.model.js";

/**
 * @module repositories/user
 * Repository for user operations in the database
 *
 * Includes:
 * - update: Update a user entry in the database
 * - findByEmail: Find a user entry by email
 * - findById: Find a user entry by id
 */
export class UserRepo {
  constructor(model = User) {
    this.model = model;
  }

  async update(id, updateData) {
    return this.model.findByIdAndUpdate(id, updateData, { new: true });
  }

  // Find a user entry by email
  async findByEmail(email) {
    return await this.model.findOne({ email });
  }

  // Find a user entry by id
  async findById(id) {
    return await this.model.findById(id);
  }
}

export const userRepo = new UserRepo(); // User repository instance

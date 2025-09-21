import { User } from "../models/user.model.js";

/**
 * @module repositories/user
 * Repository for user related operations in the database
 *
 * Includes:
 * - update: Update a entry in the database by id
 * - findById: Find a entry by id
 * - findByEmail: Find a entry by email
 */
export class UserRepo {
  constructor(model = User) {
    this.model = model;
  }

  async insert(data) {
    return this.model.create(data);
  }

  async update(id, updateData) {
    return this.model.findByIdAndUpdate(id, updateData, { new: true });
  }

  async findByEmail(email) {
    return await this.model.findOne({ email });
  }

  async findById(id) {
    return await this.model.findById(id);
  }
}

export const userRepo = new UserRepo(); // User repository instance

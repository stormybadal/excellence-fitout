import { Project } from "../models/project.model.js";

/**
 * @module repositories/project
 * Repository for project related operations in the database
 *
 * Includes:
 * - insert: Insert a new project in the database
 * - update: Update a project in the database by id
 * - findById: Find a project by id
 * - delete: Delete a project by id
 * - findAll: Get all projects with pagination and filtering
 */

export class ProjectRepo {
    constructor (model = Project) {
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

    async countDocuments() {
        return await this.model.countDocuments();
    }

    async findAll({ page = 1, limit = 10 }) {
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

export const projectRepo = new ProjectRepo();

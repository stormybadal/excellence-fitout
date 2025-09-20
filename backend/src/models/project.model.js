import mongoose from "mongoose";

/**
 * @module models/project
 * Mongoose schema for projects
 *
 * Fields:
 * - projectName: Name of the project
 * - shortDescription: Brief description of the project
 * - location: Project location
 * - duration: Project duration
 * - details: Detailed description of the project
 * - image: Project image URL
 * - category: Project category (Commercial, Residential, Renovation)
 * - status: Project status (Completed, In Progress, Upcoming)
 * - createdAt: Project creation timestamp
 * - updatedAt: Project last update timestamp
 */

const projectSchema = new mongoose.Schema(
    {
        projectName: {
            type: String,
            required: [true, "Project name is required"],
            trim: true,
            maxlength: [100, "Project name cannot exceed 100 characters"],
        },
        shortDescription: {
            type: String,
            required: [true, "Short description is required"],
            trim: true,
            maxlength: [200, "Short description cannot exceed 200 characters"],
        },
        location: {
            type: String,
            required: [true, "Location is required"],
            trim: true,
            maxlength: [100, "Location cannot exceed 100 characters"],
        },
        duration: {
            type: String,
            required: [true, "Duration is required"],
            trim: true,
            maxlength: [50, "Duration cannot exceed 50 characters"],
        },
        details: {
            type: String,
            required: [true, "Project details are required"],
            trim: true,
            maxlength: [1000, "Project details cannot exceed 1000 characters"],
        },
        image: {
            type: String,
            required: [true, "Project image is required"],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

// Create and export the model
export const Project = mongoose.model("Project", projectSchema);

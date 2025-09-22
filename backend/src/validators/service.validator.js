import { z } from "zod";

// Create service
export const createServiceSchema = z.object({
  heading: z.string().min(3, "Heading must be at least 3 characters long").trim(),
  tagline: z.string().min(3, "Tagline must be at least 3 characters long").trim(),
  subheading: z.string().min(3, "Subheading must be at least 3 characters long").trim(),
  description: z.string().min(10, "Description must be at least 10 characters long").trim(),
  features: z
    .array(z.string().min(1, "Feature cannot be empty"))
    .min(1, "At least one feature is required"),
  category: z.string().min(3, "Category must be at least 3 characters long").trim(),
}).loose();

// Update blog info
export const updateServiceInfoSchema = z.object({
  heading: z.string().min(3, "Heading must be at least 3 characters long").optional(),
  tagline: z.string().min(3, "Tagline must be at least 3 characters long").optional(),
  subheading: z.string().min(3, "Subheading must be at least 3 characters long").optional(),
  description: z.string().min(10, "Description must be at least 10 characters long").optional(),
  features: z
    .array(z.string().min(1, "Feature cannot be empty"))
    .min(1, "At least one feature is required")
    .optional(),
  category: z.string().min(3, "Category must be at least 3 characters long").optional(),
});

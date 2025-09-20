import { client } from "./client.api";

// Get all gallery images with optional pagination
export const fetchAllGalleryImages = async (params = {}) => {
    try {
        const queryParams = new URLSearchParams();

        if (params.page) queryParams.append("page", params.page);
        if (params.limit) queryParams.append("limit", params.limit);

        const response = await client.get(`/gallery?${queryParams.toString()}`);
        return response.data;
    } catch (err) {
        throw err.response?.data || new Error("Failed to fetch gallery images");
    }
};

// Get gallery image by ID
export const fetchGalleryImageById = async (id) => {
    console.log("fetch gallery image by id in gallery api -", id);
    try {
        const response = await client.get(`/gallery/${id}`);
        console.log("gallery image details response", response.data);
        return response.data;
    } catch (err) {
        throw err.response?.data || new Error("Failed to fetch gallery image");
    }
};

// Create new gallery image (requires authentication)
export const createGalleryImage = async (formData) => {
    try {
        const response = await client.post("/gallery", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (err) {
        throw err.response?.data || new Error("Failed to upload gallery image");
    }
};

// Delete gallery image (requires authentication)
export const deleteGalleryImage = async (id) => {
    try {
        const response = await client.delete(`/gallery/${id}`);
        return response.data;
    } catch (err) {
        throw err.response?.data || new Error("Failed to delete gallery image");
    }
};

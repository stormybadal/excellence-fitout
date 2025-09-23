import { client } from "./client.api";

// Get all projects with optional pagination
export const fetchAllProjects = async (params = {}) => {

    console.log('params', params);
    try {
        const queryParams = new URLSearchParams();

        if (params.page) queryParams.append('page', params.page);
        if (params.limit) queryParams.append('limit', params.limit);

        const response = await client.get(`/project?${queryParams.toString()}`);
        return response.data;
    } catch (err) {
        throw err.response?.data || new Error("Failed to fetch projects");
    }
};

// Get project by ID
export const fetchProjectById = async (id) => {
    // console.log('fetch project by id in project api-', id);
    try {
        const response = await client.get(`/project/${id}`);
        // console.log('project details response', response.data);
        return response.data;
    } catch (err) {
        throw err.response?.data || new Error("Failed to fetch project details");
    }
};


// Create new project (requires authentication)
export const createProject = async (projectData) => {
    try {
        const response = await client.post("/project", projectData,{
      headers: {
        "Content-Type": "multipart/form-data", // ✅ required for multer
      },
    })
        return response.data;
    } catch (err) {
        throw err.response?.data || new Error("Failed to create project");
    }
};

// Update project info (requires authentication)
export const updateProject = async (id, projectData) => {
    try {
        const response = await client.patch(`/project/${id}`, projectData);
        return response.data;
    } catch (err) {
        throw err.response?.data || new Error("Failed to update project");
    }
};


// Delete project (requires authentication)
export const deleteProject = async (id) => {
    try {
        const response = await client.delete(`/project/${id}`);
        return response.data;
    } catch (err) {
        throw err.response?.data || new Error("Failed to delete project");
    }
};

export const updateProjectImage = async (projectId, imageFile) => {
    try {
        if (!imageFile) throw new Error("Image file is required");
        const formData = new FormData();
        formData.append("image", imageFile);
        const response = await client.patch(`/project/${projectId}/image`, formData, {
            headers: {
                "Content-Type": "multipart/form-data", // ✅ required for multer
            },
        });
        return response.data;
    } catch (err) {
        throw err.response?.data || new Error("Failed to update project image");
    }
};


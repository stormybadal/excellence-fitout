import { client } from "./client.api";


export const fetAllBlog = async ({ page, limit}) => {
  try {
    const response = await client.get(`/blog?page=${page}&limit=${limit}`);
    // Return only the data part with pagination info
    return response.data.data; // contains entries, page, pages, total
  } catch (err) {
    throw err.response?.data || new Error("Failed to fetch the blog details");
  }
};


import { client } from "./client.api";

export const fetAllBlog = async ({ page, limit }) => {
  try {
    const response = await client.get(`/blog?page=${page}&limit=${limit}`);
    // Return only the data part with pagination info
    return response.data.data; // contains entries, page, pages, total
  } catch (err) {
    throw err.response?.data || new Error("Failed to fetch the blog details");
  }
};

export const createBlog = async (blogData) => {
  try {
    console.log("blogData", blogData);
    const response = await client.post("/blog", blogData);
    return response.data;
  } catch (err) {
    throw err.response?.data || new Error("Failed to create blog");
  }
};

export const updateBlog = async (blogId, blogData) => {
  try {
    const response = await client.patch(`/blog/${blogId}`, blogData);
    return response.data;
  } catch (err) {
    throw err.response?.data || new Error("Failed to update blog");
  }
};

export const deleteBlog = async (blogId) => {
  try {
    const response = await client.delete(`/blog/${blogId}`);
    return response.data;
  } catch (err) {
    throw err.response?.data || new Error("Failed to delete blog");
  }
};
export const fetchBlogById = async (id) => {
  console.log("id", id);

  try {
    console.log("id", id);

    const response = await client.get(`/blog/${id}`);
    return response.data.data; // assuming your API returns { data: blog }
  } catch (err) {
    throw err.response?.data || new Error("Failed to fetch the blog details");
  }
};
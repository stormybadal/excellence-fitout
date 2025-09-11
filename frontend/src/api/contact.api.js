import { client } from "./client.api";

export const submitContactForm = async (data) => {
  try {
    const response = await client.post("/contact", data);
    return response.data;
  } catch (err) {
    throw err.response?.data || new Error("Failed to submit contact form");
  }
};

// api/dashboard.api.js
import { client } from "./client.api";

export const fetchDashboardStats = async () => {
  try {
    const response = await client.get("/dashboard/stats");
    // Return only the data part
    return response.data;
  } catch (err) {
    throw err.response?.data || new Error("Failed to fetch dashboard stats");
  }
};

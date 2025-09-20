// api/portfolio.api.js
import { client } from "./client.api";

// Fetch paginated portfolio/services
export const fetchAllPortfolio = async ({ page, limit }) => {
  try {
    const response = await client.get(`/service?page=${page}&limit=${limit}`);
    return response.data.data; // contains entries, page, pages, total
  } catch (err) {
    throw err.response?.data || new Error("Failed to fetch the portfolio");
  }
};

// Fetch single service/portfolio by id
export const fetchPortfolioById = async (id) => {
  try {
    const response = await client.get(`/service/${id}`);
    return response.data.data; // service details
  } catch (err) {
    throw err.response?.data || new Error("Failed to fetch the portfolio item");
  }
};

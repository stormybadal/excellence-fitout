// api/portfolio.api.js
import { client } from "./client.api";

// Fetch paginated portfolio/services
export const fetchAllPortfolio = async ({ page, limit,category=null }) => {
let baseURI =  `/service?page=${page}&limit=${limit}`
if(category){
  baseURI = `${baseURI}&category=${category}`
}
  try {
    const response = await client.get(baseURI);
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

export const createPortfolio = async (portfolioData) => {
  try {
    const response = await client.post("/service", portfolioData);
    return response.data;
  } catch (err) {
    throw err.response?.data || new Error("Failed to create portfolio item");
  }
};

export const updatePortfolio = async (portfolioId, portfolioData) => {
  try {
    const response = await client.patch(`/service/${portfolioId}`, portfolioData);
    return response.data;
  } catch (err) {
    throw err.response?.data || new Error("Failed to update portfolio item");
  } 
};

export const deletePortfolio = async (portfolioId) => {
  try {
    const response = await client.delete(`/service/${portfolioId}`);
    return response.data;
  } catch (err) {
    throw err.response?.data || new Error("Failed to delete portfolio item");
  } 
};

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await client.get("/service/category"); // adjust endpoint if needed
    if (!response.data || !response.data.data || response.data.data.length === 0) {
      throw new Error("No categories found.");
    }
    return response.data.data; // return the array of categories
  } catch (err) {
    throw err.response?.data || new Error("Failed to fetch categories");
  }
};
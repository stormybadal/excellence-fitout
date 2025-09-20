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
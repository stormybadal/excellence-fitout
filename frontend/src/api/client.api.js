import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // base URL
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, 
});

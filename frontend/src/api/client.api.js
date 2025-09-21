import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // base URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // optional: 5 seconds timeout
});

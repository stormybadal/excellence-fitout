import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:8080/api/v1", // base URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // optional: 5 seconds timeout
});

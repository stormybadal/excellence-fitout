import { client } from "./client.api";

export const loginExistedUser = async (data) => {
  try {
    const response = await client.post("/auth/login", data);

    console.log("Login response: ", response.data);
    return response.data.data; // sanitized user
  } catch (err) {
    throw err.response?.data || new Error("Failed to login user.");
  }
};

export const logoutExistedUser = async () => {
  try {
    const response = await client.post("/auth/logout");

    console.log("Logout response: ", response.data);
    return response.data.data;
  } catch (err) {
    throw err.response?.data || new Error("Failed to logout user.");
  }
};

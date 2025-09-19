import fs from "fs/promises";
import { cloudinary } from "../configs/cloudinary.config.js";

// Upload single local file
export const uploadOnCloudinary = async (localFilePath, folder = "uploads") => {
  try {
    const result = await cloudinary.uploader.upload(localFilePath, {
      folder,
      resource_type: "image",
    });
    await fs.unlink(localFilePath); // cleanup local
    return result;
  } catch (err) {
    try {
      await fs.unlink(localFilePath);
    } catch {}
    throw err;
  }
};

// Upload multiple local files
export const uploadManyOnCloudinary = async (files, folder = "uploads") => {
  const results = [];
  for (const file of files) {
    const uploaded = await uploadOnCloudinary(file.path, folder);
    results.push(uploaded);
  }
  return results;
};

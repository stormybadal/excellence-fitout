import { upload } from "../configs/multer.config.js";

// For single image fields
export const uploadSingle = (fieldName) => upload.single(fieldName);

// For multiple images
export const uploadMultiple = (fieldName, maxCount = 5) => upload.array(fieldName, maxCount);

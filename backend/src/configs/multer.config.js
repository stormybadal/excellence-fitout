import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// Format date
const formatDate = () => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date().toLocaleDateString("en-GB", options).replace(/\s/g, "-");
};

// Disk storage (temp files)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./public/temp"),
  filename: (req, file, cb) => {
    const uniqueSuffix = `${uuidv4()}-${formatDate()}${path.extname(file.originalname)}`;
    cb(null, uniqueSuffix);
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
  if (allowedTypes.includes(file.mimetype)) cb(null, true);
  else cb(new Error("Invalid file type. Only JPEG, JPG, PNG, and GIF are allowed."), false);
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// 1. Connect to MongoDB
const MONGO_URI = "mongodb+srv://excellenceinterriors:ExcellenceInt%402025@excellence-interriors.wuww5ec.mongodb.net/excellence-interriors"; // change "myapp" to your db name

// 2. Define User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

// 3. Password hash middleware
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model("User", userSchema);

// 4. Seed function
const seedUser = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ Connected to MongoDB");

        // Check if user already exists
        const existing = await User.findOne({ email: "testuser@example.com" });
        if (existing) {
            console.log("⚠️ User already exists:", existing.email);
            return process.exit(0);
        }

        // Create hardcoded user
        const user = new User({
            name: "Ikram Shaikh",
            email: "info@excellenceinteriors.com",
            password: "ikram@123", // will be hashed automatically
        });

        await user.save();
        // console.log("🎉 User saved successfully:", user);
        process.exit(0);
    } catch (err) {
        console.error("❌ Error seeding user:", err);
        process.exit(1);
    }
};

seedUser();

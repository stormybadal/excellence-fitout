import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({

    service_name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    features: {
        type: [String],
        default: []
    },
    tagline: {
        type: String,
        required: true
    },
    why_choose_us: {
        type: String,
        required: true
    },
    service_images: {
        type: [String],
        default: []
    }

}, { timestamps: true });

export default mongoose.model("Service", ServiceSchema);

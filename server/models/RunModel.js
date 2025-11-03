import mongoose from "mongoose";

export const runSchema = new mongoose.Schema({
    _id: { type: String, unique: true },
    user_id: { type: String, required: true, ref: "RunnerModel" },
    start_time: { type: Date, required: true },
    end_time: { type: Date },
    distance: { type: Number, default: 0 }, // in kilometers
    zones_contributed: { type: [String], default: [] }, // Array of zone IDs
    path: [{
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
        timestamp: { type: Date, default: Date.now }
    }],
    status: { 
        type: String, 
        enum: ["active", "completed", "paused"],
        default: "active"
    }
}, {
    collection: "runs",
    timestamps: true // Adds createdAt and updatedAt automatically
});

export const RunModel = mongoose.models.RunModel || mongoose.model("RunModel", runSchema);

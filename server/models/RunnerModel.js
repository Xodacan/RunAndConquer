import mongoose from "mongoose";
export const runnerSchema = new mongoose.Schema(
{
    Id: { type: String, unique: true },
    username: { type: String, required: true , unique: true },
    email: {type: String, required: true},
    phoneNumber: { type: String },
    total_distance: {type: float},
    total_flags: {type: Number},
    joined_at: {type: Date, required: true},
    last_active: {type: Date, required: true}
}, {collection : "runners"}
)

export const RunnerModel = mongoose.models.RunnerModel || mongoose.model("RunnerModel", userSchema);

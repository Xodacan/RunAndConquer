import mongoose from "mongoose";
export const houseSchema = new mongoose.Schema(
{
    _id: { type: String, unique: true },
    name: { type: String, required: true , unique: true },
    colour: {type: String, required: true},
    total_distance: {type: Number, default: 0},
    total_flags: {type: Number, default: 0},
    members: {type: Array}
}, {collection: "houses"}
)
export const houseModel = mongoose.models.houseModel || mongoose.model("HouseModel", userSchema);

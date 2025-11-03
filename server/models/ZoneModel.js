
import mongoose from "mongoose";

export const zoneSchema = new mongoose.Schema({
    _id: { type: String, unique: true },
    geo_hex: { type: String, required: true, unique: true }, // H3 hex identifier
    owner_house: { type: String, default: null }, // Current owner: "Blaze", "Terra", "Aero", "Luna", or null
    total_distance_by_house: {
        Blaze: { type: Number, default: 0 },
        Terra: { type: Number, default: 0 },
        Aero: { type: Number, default: 0 },
        Luna: { type: Number, default: 0 }
    },
    flags: {
        Blaze: { type: Number, default: 0 },
        Terra: { type: Number, default: 0 },
        Aero: { type: Number, default: 0 },
        Luna: { type: Number, default: 0 }
    },
    last_updated: { type: Date, default: Date.now }
}, {
    collection: "zones"
});

export const ZoneModel = mongoose.models.ZoneModel || mongoose.model("ZoneModel", zoneSchema);

import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  scanned: { type: Boolean, required: true },
  barcode: { type: String, required: true },
});

export default mongoose.model("Prod", ProductSchema);

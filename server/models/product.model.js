import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
  weight: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true }
});

const productSchema = new mongoose.Schema(
  {
    plant_name: String,
    region: [String],
    state: [String],

    districts: [String],

    water: [String],
    soil: [String],
    heat: [String],

    sowing_month: [String],
    sunlight: String,

    description: String,
    plant_type: String,
    duration: String,

    season: [String],
    climate: [String],
    humidity: String,

    category: String,
    product_id: { type: String, unique: true },

    availability: String,
    image_url: String,
    image_public_id: String,

    variants: [variantSchema],

    currency: String,
    brand: String,
    rating: Number,
    reviews: Number
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  user_name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },

  password: { type: String, required: true },

  country: { type: String },
  state: { type: String },
  city: { type: String },
  pincode: { type: String },
  address: { type: String },

  terms: { type: Boolean, required: true },
  privacy: { type: Boolean, required: true },

  role: { type: String, enum: ["user", "admin"], default: "user" },


  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      variantId: {
        type: mongoose.Schema.Types.ObjectId,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],


  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;



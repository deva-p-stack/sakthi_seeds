
import cloudinary from "../../config/cloudinary.js";

import { Product } from "#models/product.model";


export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Delete image from cloudinary if it exists
    if (product.image_public_id) {
      try {
        await cloudinary.uploader.destroy(product.image_public_id);
      } catch (err) {
        console.error("Error deleting image from Cloudinary:", err);
        // Continue with product deletion even if image deletion fails
      }
    }

    // delete from DB
    await Product.findByIdAndDelete(id);



    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
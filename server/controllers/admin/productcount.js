import { Product } from "../../models/product.model.js";

export const getProductCounts = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();

    return res.status(200).json({
      success: true,
      totalProducts,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
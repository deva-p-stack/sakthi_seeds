import { Product } from "../../models/product.model.js";


export const getProductStock = async (req, res) => {
  try {
    
    // out of stock products
    
    const outOfStock = await Product.countDocuments({
      availability: "out_of_stock",
    });

    // in stock products
    const inStock = await Product.countDocuments({
      availability: "in_stock",
    });

    return res.status(200).json({
      success: true,
     
      inStock,
      outOfStock,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
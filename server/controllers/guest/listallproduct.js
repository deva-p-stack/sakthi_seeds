import express from "express";
import { Product } from "../../models/product.model.js";

export const getProductAll = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
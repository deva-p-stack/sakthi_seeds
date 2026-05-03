import express from "express";

import { Product } from "../../models/product.model.js";


export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    return res.status(200).json({
      success: true,
      message: "Route is working",
      userId
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
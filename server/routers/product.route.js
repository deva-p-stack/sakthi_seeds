import express from "express";
import { authMiddleware } from "#middleware/auth";
import { getProducts } from "#controllers/productController";
import { requireAdmin } from "#middleware/admin";
const router = express.Router();

// products
router.get("/products", authMiddleware,requireAdmin, getProducts);

export default router;

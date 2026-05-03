import express from "express";
import { getProductAll } from "../../controllers/guest/listallproduct.js";

const router = express.Router();


// url http://localhost:5000/guest/products
router.get("/products", getProductAll);

export default router;
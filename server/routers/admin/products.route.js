import express from "express";
import { authMiddleware } from "#middleware/auth";
import { manageProducts } from "#controllers/admin/adminController";
import { requireAdmin } from "#middleware/admin";
import { upload } from "../../middleware/multer.js";
import { createProduct } from "../../controllers/admin/addproductController.js";
import validateBody from "#middleware/zod-validate";
import { productSchema} from "../../schemas/authSchema.js";
import { getAllProducts, getProductById } from "../../controllers/admin/getProducts.js";
import { getProductCounts } from "../../controllers/admin/productcount.js";
import {getProductStock} from "../../controllers/admin/productstock.js";
import { updateProduct } from "../../controllers/admin/editproduct.js";

import {getProductAll} from "../../controllers/guest/listallproduct.js";

import { deleteProduct } from "../../controllers/admin/deleteProduct.js";

const router = express.Router();

// products // http://localhost:3000/api/admin/manage-products
router.get("/manage-products", requireAdmin, manageProducts);



// add product // http://localhost:3000/api/admin/add/product
router.post("/addproduct",authMiddleware,requireAdmin,upload.single("image"),validateBody(productSchema),createProduct);



// for the put method to get the product by id and send to the client for edit
// get single product by id // http://localhost:3000/api/admin/product/:id
router.get("/product/:id", authMiddleware, requireAdmin, getProductById);



// put method to update the product by id // http://localhost:3000/api/admin/product/:id
router.put("/product/:id",authMiddleware,requireAdmin,upload.single("image"), validateBody(productSchema),updateProduct);


router.delete("/product/:id", authMiddleware, requireAdmin, deleteProduct);

// get products list for admin in table  // http://localhost:3000/api/admin/products
router.get("/products",authMiddleware,requireAdmin, getAllProducts);



// get product list of products id // http://localhost:3000/api/admin/product-counts
router.get("/product-counts",authMiddleware,requireAdmin, getProductCounts);

 


router.get("/product-stock",authMiddleware,requireAdmin, getProductStock);




export default router;

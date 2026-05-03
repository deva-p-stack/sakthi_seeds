import express from "express";
import authRoutes from "#routers/auth.route";
import productRouter from "#routers/product.route";
import adminProductRouter from "#routers/admin/products.route";

import getproduct from "./guest/getproduct.route.js";

import cartRoutes from "./user/cart.routes.js";


import wishlistRoutes from "./user/wishlist.router.js";


// import  from "./auth.router.js";
// import  from "./product.router.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello from the server!" });
});


router.use("/", authRoutes);

router.use("/", productRouter);

router.use("/guest", getproduct);

// admin routes
router.use("/admin", adminProductRouter);


// user routes
router.use("/user/cart", cartRoutes);


// user wishlist
router.use("/user/wishlist", wishlistRoutes);






export default router;

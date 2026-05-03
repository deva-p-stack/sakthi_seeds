import express from "express";


import { getUserById } from "../../controllers/user/cart.controller.js";

const router = express.Router();




router.get("/getuser",getUserById );




export default router;


import express from "express";


import { getUserById  } from "../../controllers/user/wishlist.controller.js";

const router = express.Router();




router.get("userid",getUserById );




export default router;

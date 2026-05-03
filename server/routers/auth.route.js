import express from "express"
import validateBody from "#middleware/zod-validate"


import { loginSchema, registerSchema } from "#schemas/authSchema"


import {authMiddleware} from "#middleware/auth"


import { loginUser,getCurrentUser,registerUser,logoutUser } from "#controllers/authController"


const router = express.Router();

// create a end poit for register user

router.post("/register",validateBody(registerSchema),registerUser);

// 

router.post ("/login",validateBody(loginSchema),loginUser);


// 
router.get("/me",authMiddleware,getCurrentUser);

// 
router.post("/logout", logoutUser);


export default router;






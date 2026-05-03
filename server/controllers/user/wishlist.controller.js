import express from "express";

import { Product } from "../../models/product.model.js";



export const  getUserById = async (req, res) =>{


try{



}
catch(error){
 return res.status(500).json({
      success: false,
      message: error.message,
    });

}
}
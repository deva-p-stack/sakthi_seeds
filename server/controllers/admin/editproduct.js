import { Product } from "../../models/product.model.js";
import cloudinary from "../../config/cloudinary.js";

export const updateProduct = async (req, res) => {

  console.log("Edit request reached controller:", req.validatedBody);

  try {
    const { id } = req.params;
    const data = req.validatedBody || {};

    const variants = data.variants || [];

    if (!Array.isArray(variants) || !variants.length) {
      return res.status(400).json({
        success: false,
        message: "At least one variant is required",
      });
    }

    let image_url;
    let image_public_id;

    // upload new image if exists
    if (req.file) {
      try {
        // Get existing product to delete old image
        const existingProduct = await Product.findById(id);
        
        if (existingProduct && existingProduct.image_public_id) {
          try {
            await cloudinary.uploader.destroy(existingProduct.image_public_id);
          } catch (deleteErr) {
            console.error("Error deleting old image:", deleteErr);
          }
        }

        const base64 = req.file.buffer.toString("base64");
        const dataURI = `data:${req.file.mimetype};base64,${base64}`;

        const result = await cloudinary.uploader.upload(dataURI, {
          folder: "products",
        });

        image_url = result.secure_url;
        image_public_id = result.public_id;
      } catch (err) {
        return res.status(500).json({
          success: false,
          message: "Image upload failed: " + err.message,
        });
      }
    }

    const finalData = {
      ...data,
      variants,
    };

    if (image_url) {
      finalData.image_url = image_url;
      finalData.image_public_id = image_public_id;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: finalData },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

import { Product } from "../../models/product.model.js";
import cloudinary from "../../config/cloudinary.js";

export const createProduct = async (req, res) => {
  console.log("Response reached controller with data:", req.validatedBody);

  try {
    // Compulsory check for image
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required"
      });
    }

    const data = req.validatedBody || {};
    console.log("Received product data:", data);

    // Get variants from validated data (already parsed by middleware)
    const variants = data.variants || [];

    // Check if variants is an array and has at least one item
    if (!Array.isArray(variants) || !variants.length) {
      return res.status(400).json({
        success: false,
        message: "At least one variant is required"
      });
    }

    // Upload image
    if (req.file) {
      console.log("FILE:", req.file);
      try {
        // Convert image buffer to base64 string
        const base64 = req.file.buffer.toString("base64");
        const dataURI = `data:${req.file.mimetype};base64,${base64}`;

        // Upload to cloudinary
        console.log("Uploading to cloudinary...");
        const result = await cloudinary.uploader.upload(dataURI, {
          folder: "products"
        });

        console.log("CLOUDINARY RESULT:", result);

        // Prepare final data to save in DB
        const finalData = {
          ...data,
          variants,
          image_url: result.secure_url,
          image_public_id: result.public_id
        };

        console.log("FINAL DATA:", finalData);

        // Save to DB
        const product = await Product.create(finalData);

        // Respond to client
        return res.status(201).json({
          success: true,
          message: "Product created successfully",
          data: product
        });

      } catch (err) {
        console.error("Cloudinary error:", err.message);
        return res.status(500).json({
          success: false,
          message: "Image upload failed: " + err.message
        });
      }
    }

  } catch (error) {
    console.error("Error creating product:", error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Product ID already exists"
      });
    }
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}




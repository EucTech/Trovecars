const Product = require("../models/Product");

const uploadProductController = {
  addProduct: async (req, res) => {
    try {
      const {
        videoUrl,
        safety_features,
        all_features,
        whatsapp_number,
        email,
        description,
        title,
        condition,
        type,
        make,
        model,
        price,
        year,
        drive_type,
        transmission,
        fuel_type,
        mileage,
        engine_size,
        cylinders,
        color,
        doors,
        vin,
        images,
      } = req.body;

      let products = await Product.find({});
      let productId;
      if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        productId = last_product.id + 1;
      } else {
        productId = 1;
      }

      // Create a new product instance
      const product = new Product({
        id:productId,
        videoUrl,
        safety_features,
        all_features,
        whatsapp_number,
        email,
        description,
        title,
        condition,
        type,
        make,
        model,
        price,
        year,
        drive_type,
        transmission,
        fuel_type,
        mileage,
        engine_size,
        cylinders,
        color,
        doors,
        vin,
        images,
      });
      console.log(product);
      // Save the product to the database
      await product.save();
      console.log("sav");

      res
        .status(201)
        .json({ success: true, message: "Product added successfully" });
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ success: false, error: "Failed to add product" });
    }
  },
};

module.exports = uploadProductController;

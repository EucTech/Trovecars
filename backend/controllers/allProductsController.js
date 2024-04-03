const Product = require('../models/Product');

const allProductsController = {
  allproducts: async (req, res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
  },
};

module.exports = allProductsController;

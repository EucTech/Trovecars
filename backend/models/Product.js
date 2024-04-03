const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    videoUrl: String,
    safety_features: Object,
    all_features: Object,
    whatsapp_number: String,
    email: String,
    description: String,
    title: String,
    condition: String,
    type: String,
    make: String,
    model: String,
    price: String,
    year: Number,
    drive_type: String,
    transmission: String,
    fuel_type: String,
    mileage: String,
    engine_size: String,
    cylinders: String,
    color: String,
    doors: String,
    vin: String,
    images: Object
  });
  
  const Product = mongoose.model('Product', productSchema);
  
  module.exports = Product;
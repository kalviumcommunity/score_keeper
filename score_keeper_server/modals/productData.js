const mongoose = require('mongoose');

// Define a schema for the Product data
const productDataSchema = new mongoose.Schema({
    productName: String,
    price: String,
    category: String,
    timeAdded: String,
    decription: String,
    rating: Number,
    urlToImage: String,
    like: Number,
    url: String
});
  
// Create a model for the game data
const ProductData = mongoose.model('ProductData', productDataSchema);

module.exports = ProductData
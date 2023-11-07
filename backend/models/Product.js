const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: {type: String, required: false},
  name: {type: String, required: true},
  description: {type: String, required: true},
  color: {type: String, required: true},
  size: {type: Number, required: false},
  weight: {type: Number, required: false},
  price: {type: Number, required: true},
},

{
    timestamps: true
})

const Product = mongoose.model('product', productSchema)
module.exports= Product;
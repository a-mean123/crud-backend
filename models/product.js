const mongoose = require('mongoose');

let Product = mongoose.model('Product', {
    title:String,
    description:String,
    price:Number,
    image:String
});

module.exports = Product;
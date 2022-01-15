const mongoose = require('mongoose');

let User = mongoose.model('User', {
    nom:String,
    prénom:String,
    age:Number,
    adresse:String
});

module.exports = User;
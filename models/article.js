const mongoose = require('mongoose');

let Article = mongoose.model('Article', {
    title:String,
    content:String,
    photo:String,
    like:Number
});

module.exports = Article;
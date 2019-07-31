let mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    userId: Number,
    id: Number,
    img: String,
    type: String,
    title: String,
    body: String
});

mongoose.model('Blog', postSchema, 'posts');
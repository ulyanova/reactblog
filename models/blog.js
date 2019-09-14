let mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    userId: String,
    id: String,
    img: Array,
    type: String,
    title: String,
    body: Array
});

mongoose.model('Blog', postSchema, 'posts');
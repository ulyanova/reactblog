let mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: String,
    id: String,
    img: String,
    type: String,
    title: String,
    body: Array,
    images: Array,
    bodyItalic: Array,
    bodyFull: Array
});

mongoose.model('Blog', postSchema, 'posts');
let mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    postId: String,
    id: String,
    userId: String,
    body: String
});

mongoose.model('Comment', commentSchema, 'comments');
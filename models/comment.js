let mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    postId: String,
    commentId: String,
    id: String,
    userId: String,
    body: String,
    replies: Array
});

mongoose.model('Comment', commentSchema, 'comments');
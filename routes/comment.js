let express = require('express');
let mongoose = require('mongoose');

let router = express.Router();
var Comment = mongoose.model('Comment');

router.get('/postId/:id', function (req, res, next) {
    Comment.find({postId: req.params.id}, function (err, comment) {
        if(err){
            return next(err);
        }

        res.json(comment);
    })
});

module.exports = router;

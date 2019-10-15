let express = require('express');
let mongoose = require('mongoose');

let router = express.Router();
var Comment = mongoose.model('Comment');

router.get('/', function (req, res, next) {
    Comment.find({}, function (err, comment) {
        if(err){
            return next(err);
        }

        res.json(comment);
    })
});

router.get('/postId/:id', function (req, res, next) {
    Comment.find({postId: req.params.id}, function (err, comment) {
        if(err){
            return next(err);
        }

        res.json(comment);
    })
});

module.exports = router;

let express = require('express');
let mongoose = require('mongoose');

let router = express.Router();
var Blog = mongoose.model('Blog');

router.get('/', function (req, res, next) {
    Blog.find({}, function (err, blog) {
        if(err){
            return next(err);
        }

        res.json(blog);
    })
});

module.exports = router;
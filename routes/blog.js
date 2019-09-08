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

router.get('/lifestyle', function (req, res, next) {
    Blog.find({type: 'lifestyle'}, function (err, blog) {
        if(err){
            return next(err);
        }

        res.json(blog);
    })
});

router.get('/photodiary', function (req, res, next) {
    Blog.find({type: 'photodiary'}, function (err, blog) {
        if(err){
            return next(err);
        }

        res.json(blog);
    })
});

router.get('/music', function (req, res, next) {
    Blog.find({type: 'music'}, function (err, blog) {
        if(err){
            return next(err);
        }

        res.json(blog);
    })
});

router.get('/travel', function (req, res, next) {
    Blog.find({type: 'travel'}, function (err, blog) {
        if(err){
            return next(err);
        }

        res.json(blog);
    })
});

module.exports = router;
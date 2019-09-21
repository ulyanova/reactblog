let mongoose = require('mongoose');
let express = require('express');
let logger = require('morgan');

require('./models/blog');
require('./models/comment');
require('./models/user');

let routeBlog = require('./routes/blog');
let routeComment = require('./routes/comment');
let routeUser = require('./routes/user');

mongoose.connect('mongodb://localhost:27017/reactBlog');

let app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    next();
});

app.use(express.static(__dirname + '/dist'));

app.use(logger('combined'));

//Маршруты
app.use('/api/posts', routeBlog);
app.use('/api/comments', routeComment);
app.use('/api/users', routeUser);

app.use(function (req, res, next) {
    let err = new Error('Page Not Found!');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

app.listen(8082, function () {
    console.log('Сервер успешно загружен');
});
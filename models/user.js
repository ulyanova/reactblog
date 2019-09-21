let mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    photo: String,
    userpassword: String
});

mongoose.model('User', userSchema, 'users');
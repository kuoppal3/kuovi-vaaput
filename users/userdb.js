var mongoose = require('mongoose');

// Schema for users who have access to orders
var Schema = mongoose.Schema;
var userSchema = new Schema({
    user: String,
    password: String
});

var userModel = mongoose.model('User', userSchema);

function User(obj) {
    this.user = obj.user;
    this.password = obj.password;
}
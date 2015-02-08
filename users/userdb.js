var mongoose = require('mongoose');

// Schema for users who have access to orders
var Schema = mongoose.Schema;
var userSchema = new Schema({
    user: String,
    password: String
});

var userModel = mongoose.model('User', userSchema);

module.exports = User;

function User(obj) {
    this.user = obj.user;
    this.password = obj.password;
}

User.prototype.add = function(fn){
    var that = this;
    
    var user =new userModel({ user: that.user,
                              password: saltedPassword
                            })
    
    // TODO encryption and adding to mongodb
};

User.prototype.find = function(username, fn) {
    
};
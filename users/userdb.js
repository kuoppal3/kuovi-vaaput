var mongoose = require('mongoose');
var crypto = require('crypto');

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
    var salt = crypto.randomBytes(128).toString('base64');
    console.log(salt);
    
    crypto.pbkdf2(that.password, salt, 64000, 512, function(err, derivedKey) {
        console.log(derivedKey.toString('base64'));
        var saltedPassword = salt + derivedKey.toString('base64');
        console.log("tää tallennetaan");
        
        console.log(saltedPassword);
        
        var user = new userModel({ user: that.user,
                                   password: saltedPassword
                                });

        user.save(function(err, user){
            if(err) { fn(err); }
            fn(null, user);
        });
        //var salt2 = saltedPassword.substring(0, 172);
    });

};

User.findUser = function(username, fn) {
    userModel.findOne({user: username}, function(err, user) {
        if(err) { throw err; }
        fn(null, user);
    });
};

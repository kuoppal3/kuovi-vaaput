// Authentication for admin to control orders

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Login
exports.passportUseLocal = passport.use(new LocalStrategy(
  {
    // Name-field from HTML
    usernameField: 'kayttaja',
    passwordField: 'salasana'
  },
  function(username, password, done) {
     
  }

));

var mongoose = require('mongoose');

// Schema for users who have access to orders
var Schema = mongoose.Schema;
var userSchema = new Schema({
    user: String,
    password: String
});
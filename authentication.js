var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Lomakekirjautuminen
exports.passportUseLocal = passport.use(new LocalStrategy(
  {
    // Name-field from HTML
    usernameField: 'kayttaja',
    passwordField: 'salasana'
  },
  function(username, password, done) {
     
  }
));
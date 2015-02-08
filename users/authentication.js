// Authentication for users to control orders

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Login
exports.passportUseLocal = passport.use(new LocalStrategy(
  {
    // Name-field from HTML
    usernameField: 'tunnus',
    passwordField: 'salasana'
  },
  function(username, password, done) {
    if(username === 'admin' && password === 'test') {
      return done(null, username);
    } else {
      return done(null, false);
    }
  }
));

// Serialize to session  variable
exports.passportSerializeUser = passport.serializeUser(function(user, done) {
  done(null, user);
});

// Deserialize from session variable
exports.passportDeserializeUser = passport.deserializeUser(function(user, done) {
  done(null, user);
});

exports.logout = function(req, res) {
  req.session.destroy(function (err) {
    if(err) { throw err; }
    res.redirect('/');
  });
};
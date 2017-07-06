var express = require('express');
var passport = require('passport');
var router = express.Router();


// initiate the login process
router.get('/login', passport.authenticate('openidconnect'), function (req, res) {
  res.render('login', { env: env });
});

// complete the login process
router.get('/callback', passport.authenticate('openidconnect', { failureRedirect: '/' }), function (req, res) {
  res.redirect(req.session.returnTo || '/users'); // success!
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

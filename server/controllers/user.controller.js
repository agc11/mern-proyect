var passport = require('passport');
import User from '../models/user';
var Verify    = require('./verify');


export function register(req, res) {
  User.register(new User({ username : req.body.username, email : req.body.email }),
      req.body.password, function(err, user) {
        if (err) {
            return res.status(500).json({err: err, msg: 'Registration Error!'});
        }
        passport.authenticate('local')(req, res, function () {
            return res.status(200).json({msg: 'Registration Successful!'});
        });
    });
}


export function login(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) return res.status(401).json({err: info});
    req.login(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      const token = Verify.getToken(user);
      res.status(200).json({
        msg: 'Login Successful!',
        user: user,
        token: token,
      });
    });
  })(req,res,next);
}

// var express     = require('express');
// var request     = require("request");
// var models      = require('../models');
// var User        = models.users;
// var bcrypt      = require('bcrypt');
// var session     = require('express-session');

// var currentUserRouter = express.Router();

// currentUserRouter.use(session({
//   secret: 'blob',
//   saveUninitialized: false,
//   resave: false
// }));

// currentUserRouter.get('/current_user', function(req, res) {
//   if (req.session.currentUser) res.send(req.session.currentUser)
// });

// module.exports = currentUserRouter;
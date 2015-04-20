// var express     = require('express');
// var request     = require("request");
// var models      = require('../models');
// var User        = models.users;
// var bcrypt      = require('bcrypt');
// var session     = require('express-session');

// var sessionsRouter = express.Router();

// sessionsRouter.use(session({
//   secret: 'blob',
//   saveUninitialized: false,
//   resave: false
// }));


// sessionsRouter.post('/', function(req, res) {
//   var username = req.body.username;
//   var password = req.body.password;

//   User
//     .findOne({
//       where: { username: username }
//     })
//     .then(function(user) {
//       if (user) {
//         bcrypt.compare(password, user.password_digest, function(err, result) {
//           if (result) {
//             req.session.currentUser = user.id;
//             res.send(user);
//           } else {
//             res.status(400);
//             res.send({ err: 400, msg: 'Incorrect Password' });
//           }
//         });
//       } else {
//         res.status(400);
//         res.send({ err: 400, message: ''});
//       }
//     });
// });

// sessionsRouter.delete('/', function(req, res) {
//   delete req.session.currentUser;
//   res.send({ msg: 'Logged Out' });
// });


// module.exports = sessionsRouter;
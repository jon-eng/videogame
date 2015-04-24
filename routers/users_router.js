var express     = require('express');
var request     = require("request");
var models      = require('../models');
var User        = models.users;
var Game        = models.games;
var bcrypt      = require('bcrypt');
var session     = require('express-session');

var usersRouter = express.Router();

usersRouter.use(session({
  secret: 'blob',
  saveUninitialized: false,
  resave: false
}));

usersRouter.get('/debug_session', function(req, res) {
  res.send(req.session);
});

var restrictAccess = function(req, res, next){
  var sessionID = parseInt(req.session.currentUser);
  var reqID = parseInt(req.params.id);

  sessionID === reqID ? next() : res.status(401).send({err: 401, msg: 'no'})
};

var authenticate = function(req, res, next){
  req.session.currentUser ? next() : res.status(400).send({err: 401, msg: 'pay the toll troll'})
};

//CREATE USER
usersRouter.post('/', function(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    User
      .create({
        username: req.body.username,
        password_digest: hash,
        email: req.body.email
      })
      .then(function(user) {
        res.send(user);
      });
  });
});

//GET USERS FOR TESTING PURPOSES
usersRouter.get('/', function(req, res) {
    User
      .findAll({
        include: [Game]
      })
      .then(function(user) {
        res.send(user);
      });
});
 
//CREATE SESSIONS FOR USER
usersRouter.post('/sessions', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User
    .findOne({
      where: { username: username }
    })
    .then(function(user) {
      if (user) {
        bcrypt.compare(password, user.password_digest, function(err, result) {
          if (result) {
            req.session.currentUser = user.id;
            res.send(user);
          } else {
            res.status(400);
            res.send({ err: 400, msg: 'Incorrect Password' });
          }
        });
      } else {
        res.status(400);
        res.send({ err: 400, message: ''});
      }
    });
});

//DELETE SESSIONS
usersRouter.delete('/sessions', function(req, res) {
  delete req.session.currentUser;
  res.send({ msg: 'Logged Out' });
});


//GET CURRENT USER
usersRouter.get('/current_user', function(req, res) {
  User
    .findOne({
      where: { id: req.session.currentUser},
      include: [Game]
    })
    .then(function(user) {
      res.send(user);
    });
});

//DELETE USER
usersRouter.delete('/:id', function(req, res) {
  User
    .findOne(req.params.id)
    .then(function(user) {
      user
        .destroy()
        .then(function() {
          delete req.session.currentUser;
          res.send(user);
        });
    });
});

//GET ONE USER
usersRouter.get('/:id', authenticate, restrictAccess, function(req, res) {
  User
    .findOne({
      where: { id: req.params.id },
      include: [Game]
    })
    .then(function(user) {
      res.send(user);
    });
});

//CREATE GAME FOR USER
usersRouter.post('/:id/games', authenticate, restrictAccess,function(req, res){
  var userID = req.params.id;
  Game
    .findOrCreate({where: {name: req.body.name}, defaults: req.body})
    .then(function(game) {
      User
        .findOne(userID)
        .then(function(user) {
           console.log(game);
          user
            .addGame(game[0])
            .then(function(info) {
              res.send(info);
            })
        })
    })
  // User
  //   .findOne(userID)
  //   .then(function(user){
  //     Game
  //       .findOrCreate({where: {name: req.body.name}, defaults: req.body})
  //       .then(function(game){
  //         console.log(user);
  //         console.log(game);
  //           user.addGame(game);
  //           res.send(game)
  //       });
  //   });
});

usersRouter.get('/:id/games', function(req, res) {
  Game
    .findOne({
      where: { id: req.params.id },
    })
    .then(function(game) {
      res.send(game);
    });
});

usersRouter.delete('/:id/games', function(req, res) {
  Game
    .findOne({
      where: { id: req.params.id },
    })
    .then(function(game) {
      game
        .destroy()
        then(function(){
          res.send(game);
        })
      
    });
});






module.exports = usersRouter;
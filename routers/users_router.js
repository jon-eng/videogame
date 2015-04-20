var express     = require('express');
var request     = require("request");
var models      = require('../models');
var User        = models.users;
var Game        = models.games;
var bcrypt      = require('bcrypt');
var session     = require('express-session');

var usersRouter = express.Router();

app.post('/users', function(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    User
      .create({
        username: req.body.username,
        password_digest: hash
      })
      .then(function(user) {
        res.send(user);
      });
  });
});

app.get('/users/:id', function(req, res) {
  User
    .findOne({
      where: { id: req.params.id },
      include: [Game]
    })
    .then(function(user) {
      res.send(user);
    });
});

app.delete('/users/:id', function(req, res) {
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
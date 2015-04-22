var express     = require('express');
var request     = require("request");
var models      = require('../models');
var Game        = models.games;

var gameRouter = express.Router();

gameRouter.post("/", function(req, res) {
  var games = req.body;
  Game
    .create(games)
    .then(function(newGame) {
      res.send(newGame)
      });
});


gameRouter.get("/", function(req, res) {
  Game
    .findAll()
       .then(function(game) {
        res.send(game)
  });
});


gameRouter.get("/:id", function(req, res) {
  Game
    .findOne({
        where: {id: req.params.id},
      })
       .then(function(game) {
        res.send(game);
       });
});


gameRouter.delete("/:id", function(req, res) {
  Game
    .findOne({
        where: {id: req.params.id},
      })
       .then(function(game) {
         game
          .destroy()
          .then(function() {
            res.send(game);
          });
       });
});


module.exports = gameRouter;
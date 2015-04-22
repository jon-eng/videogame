var express     = require('express');
var request     = require("request");
var models      = require('../models');
var Game        = models.games;

var gameRouter = express.Router();

gameRouter.get('/', function(req, res){

  var searchTerm = req.query;

  request({
    uri: 'http://www.giantbomb.com/api/search/?format=json&resources=game',
    method: 'GET',
    json: true,
    qs: {
      api_key: 'c27d95b54c5282755266b92b773f15484e474e02',
      query: req.query.query
    }

  }, function(error, response, body){
    res.send(body.results)
  });
});

module.exports = gameRouter;
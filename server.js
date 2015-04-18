var express     = require("express");
var path        = require("path");
var logger      = require("morgan");
var bodyParser  = require("body-parser");

var searchGameRouter = require('./routers/search_games_router.js')

var app = express();

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use(express.static(__dirname + "/public"));

app.use('/search_games', searchGameRouter);




module.exports = app;

app.listen( process.env.PORT || 3000, function() {
  console.log("Running on 3000!");
});
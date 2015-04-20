var application_root = __dirname;
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var searchGamesRouter = require('./routers/search_games_router.js');
// var sessionsRouter = require('./routers/sessions_router.js');
// var currentUserRouter = require('./routers/current_user_router.js');
var userRouter = require('./routers/users_router.js');
var bcrypt = require('bcrypt');
var session = require('express-session');

var app = express();

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( express.static( path.join( application_root, 'public' )));

app.use('/search_games', searchGamesRouter);
// app.use('/sessions', sessionsRouter);

app.use('/users', userRouter);
// app.use('/current_user', currentUserRouter);






app.listen( process.env.PORT || 3000, function() {
  console.log("Running!");
});


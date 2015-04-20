var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    searchGamesRouter= require('./routers/search_games_router.js'),
    sessionsRouter   = require('./routers/sessions_router.js'),
    currentUserRouter   = require('./routers/current_user_router.js'),
    bcrypt           = require('bcrypt'),
    session          = require('express-session');

var app = express();

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( express.static( path.join( application_root, 'public' )));

app.use('/search_games', searchGamesRouter);
app.use('/sessions', sessionsRouter);
app.use('/current_user', currentUserRouter);







app.listen( process.env.PORT || 3000, function() {
  console.log("Running!");
});


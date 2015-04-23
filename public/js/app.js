var App = {
  Models: {},
  Collections: {},
  Views: {}
};

$(function() {
  console.log('Loaded, bro.');

  App.loginView = new App.Views.LoginView();

  App.game = new App.Models.Game;
  App.games = new App.Collections.Games;
  App.gamesView = new App.Views.Games({collection: App.games});

  App.myGame = new App.Models.MyGame;
  App.myGames = new App.Collections.MyGames;
  App.myGamesView = new App.Views.MyGames({collection: App.myGames});

  // App.signupView = new App.Views.SignupView();
  
  // App.navView = new App.Views.NavView();
    
  // App.youtube = new App.Views.YoutubeView;


});



var App = {
  Models: {},
  Collections: {},
  Views: {}
};

$(function() {
  console.log('Loaded, bro.');

  App.game = new App.Models.Game;
  App.games = new App.Collections.Games;
  App.gamesView = new App.Views.Games({collection: App.games});

  // App.signupView = new App.Views.SignupView();
  App.loginView = new App.Views.LoginView();
  // App.navView = new App.Views.NavView();
  

});
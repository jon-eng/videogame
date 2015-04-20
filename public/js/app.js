var App = {
  Models: {},
  Collections: {},
  Views: {}
};

$(function() {
  console.log('Loaded, bro.');

  App.signupView = new App.Views.SignupView();
  App.loginView = new App.Views.LoginView();
  

});
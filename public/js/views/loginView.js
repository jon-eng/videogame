App.Views.LoginView = Backbone.View.extend({
  el: 'body',

  initialize: function(){
    console.log('load login')
    loginTemplate = Handlebars.compile($('#login-template').html());
    userTemplate = Handlebars.compile($('#user-template').html());
    // this.render();
    this.renderSession(); 
  },

  // render: function(){
  //   this.$('#login-box').append(loginTemplate());
  // },

  events: {
    'click #login-button': 'login',
    'click #logout-button': 'logout'
  },

  login: function(){
    console.log("click log in")
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    $.post('/users/sessions',{
      username: username,
      password: password
    }).done(this.renderSession);

  },

  logout: function() {
    console.log("clicked logout")
    $.ajax({
      url: '/users/sessions',
      method: 'DELETE',
    }).done(this.renderSession);
  },


  renderSession: function() {
    $.get('/users/current_user').done(function(user) {
      if (user) {
        $('#user-account').html(userTemplate(user));
      } else {
        $('#user-account').html(loginTemplate());
      }
    }).fail(function(jqXHR) {
      if (jqXHR.status === 404) {
        $('#session').html('Work In Progress');
      }
    }.bind(this));
},

});
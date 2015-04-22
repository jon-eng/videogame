App.Views.LoginView = Backbone.View.extend({
  el: 'body',

  initialize: function(){
    console.log('load login')
    loginTemplate = Handlebars.compile($('#login-template').html());
    userTemplate = Handlebars.compile($('#user-template').html());
    profileTemplate = Handlebars.compile($('#profile-template').html());
    // this.render();
    this.renderSession(); 
  },


  events: {
    'click #login-button': 'login',
    'click #logout-button': 'logout',
    'click #signup-button': 'signup',
    'click #search-button': 'findGames',
    'click #profile-button': 'viewProfile'
  },

  login: function(){
    console.log("click log in")
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    $.post('/users/sessions',{
      username: username,
      password: password
    }).done(this.renderSession);

    $('#signup').empty();

  },

  logout: function() {
    console.log("clicked logout")
    $.ajax({
      url: '/users/sessions',
      method: 'DELETE',
    }).done(this.renderSession);

    $('.game-container').empty();
    $('#profile-view').empty()
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

  findGames: function(){
    console.log('clicked search')
    App.games.fetch({
      success: function(){
       $('#profile-view').empty(); 
      }
    })
    
  },

  viewProfile: function(){
    console.log('clicked view profile')
    var userId = $('#current-user').attr('data-userId');
    $.get('/users/' + userId)
      .done(function (profile) {
        $('.game-container').remove();
        $('#profile-view').append(profileTemplate(profile))
      })
  },


  signup: function(){
    console.log('click')
    var username = $('#signup-username').val();
    var password = $('#signup-password').val();
    var email = $('#signup-email').val();

      $.post('/users', {
        username: username,
        password: password,
        email: email
      })
      .done(function() {
        alert('Successfully Signed Up!');
        $('#signup-username').val('');
        $('#signup-password').val('');
        $('#signup-email').val('');
      })
      .fail(function() {
        alert('Fail!');
  });
  }

});
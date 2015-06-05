App.Views.LoginView = Backbone.View.extend({
  el: 'body',

  initialize: function(){

    //compile all the templates

    loginTemplate = Handlebars.compile($('#login-template').html());
    userTemplate = Handlebars.compile($('#user-template').html());
    profileTemplate = Handlebars.compile($('#profile-template').html());
    youtubeTemplate = Handlebars.compile($('#yt-template').html());

    this.renderSession(); 
  },

  events: {
    'click #login-button': 'login',
    'click #logout-button': 'logout',
    'click #signup-button': 'signup',
    'click #search-button': 'findGames',
    'click #profile-button': 'viewProfile',
    'click #game-image-profile': 'viewVideo'
  },

  login: function(){

    //grab the values from username and password

    var username = $('#login-username').val();
    var password = $('#login-password').val();


    //make a post request to sessions and once
    //complete run the function renderSession
    $.post('/users/sessions',{
      username: username,
      password: password
    }).done(this.renderSession);

  },

  logout: function() {

    //make a delete request to sessions and once complete
    //run the renderSessions function
    $.ajax({
      url: '/users/sessions',
      method: 'DELETE',
    }).done(this.renderSession);


    //empty the divs and classes
    $('.game-container').empty();
    $('#profile-view').empty();
    $('#player').empty();
  },

  viewVideo: function(event){
    

    var name = event.currentTarget.className;
    console.log(name)
    var newObj = {name:name}
    var compiledTemplate = youtubeTemplate(newObj);

    $('#player').html(compiledTemplate)

  },


  renderSession: function() {

    $('#signup').empty();
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
       $('#player').empty();
      }
    })
    
  },

  viewProfile: function(){
    // console.log('clicked view profile')
    // var userId = $('#current-user').attr('data-userId');
    // $.get('/users/' + userId)
    //   .done(function (profile) {
    $('.game-container').remove();
    //     $('#profile-view').append(profileTemplate(profile))
    //   })
    console.log('view profile clicked')
    App.myGames.fetch();
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
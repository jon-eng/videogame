App.Views.Game = Backbone.View.extend({

  initialize: function(){

    //compile the game template
    this.gameTemplate = Handlebars.compile($('#game-template').html());
    this.render();
  },

  events: {
    //When the save button is clicked
    // run the saveGame function
    'click #save-button': 'saveGame'
  },

  render: function(){

    //take this.model and turn it into JSON
    //and put it into the compiled template
    var data = this.model.toJSON();
    var compiledTemplate = this.gameTemplate(data);
    this.$el.html(compiledTemplate); 
  },

  saveGame: function(){
    //take current user id and concatenate it to the url
    var id = $('#current-user').attr('data-userId');
    var games = this.model.toJSON();
    var arrayOfGames = []

    //grab each the platform that the game is on
    //and push it into an array
    games.platforms.forEach(function(platform){
      arrayOfGames.push(platform.name)
    });


    //make a post request and with the following attributes
  $.ajax({
    url: '/users/' + id + '/games',
    method: 'POST',
    data: {
      name: games.name,
      deck: games.deck,
      image: games.image.icon_url,
      platforms: arrayOfGames.toString(),
      user_id: id
    }
  }).done(function() {
    alert('Game Saved');
  })
    .fail(function() {
    alert('Game Already Saved');
  });


  }
})
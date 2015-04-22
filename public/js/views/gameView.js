App.Views.Game = Backbone.View.extend({

  initialize: function(){
    this.gameTemplate = Handlebars.compile($('#game-template').html());
    this.render();
  },

  events: {
    'click #save-button': 'saveGame'
  },

  render: function(){
    var data = this.model.toJSON();
    // console.log(data)
    var compiledTemplate = this.gameTemplate(data);
    this.$el.html(compiledTemplate); 
  },

  saveGame: function(){
    console.log('click save')
    var id = $('#current-user').attr('data-userId');
    var games = this.model.toJSON();
    var arrayOfGames = []

    games.platforms.forEach(function(platform){
      arrayOfGames.push(platform.name)
    });

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
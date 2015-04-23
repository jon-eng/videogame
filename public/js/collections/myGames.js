App.Collections.MyGames = Backbone.Collection.extend({

  url:'/users/current_user',

  model: App.Models.MyGame,

  initialize: function(){
    console.log('myGames collection created')
  }

})
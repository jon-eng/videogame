App.Collections.Games = Backbone.Collection.extend({
  initialize: function(){
    console.log('games collection created')
  },

  url: function(){
    var word = encodeURI($('#search').val());
    return '/search_games' + '?query=' + word
    
  },
  model: App.Models.Game,

})
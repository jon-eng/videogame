App.Views.Games = Backbone.View.extend({
  el: '#game-view',

  initialize: function(){

    //listen to a sync change on the page
    this.listenTo(this.collection, "sync", this.renderAll);
  },
  renderAll: function() {

    //empty el and render each model
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(game) {

    //render moel with the game json
    var gameView = new App.Views.Game({model: game});
    this.$el.append(gameView.el);
  }


})
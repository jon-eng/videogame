App.Views.Games = Backbone.View.extend({
  el: '#game-view',

  initialize: function(){
    // this.listenTo(this.collection, "reset", this.renderAll);
    this.listenTo(this.collection, "sync", this.renderAll);
  },
  renderAll: function() {
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(game) {
    var gameView = new App.Views.Game({model: game});
    this.$el.append(gameView.el);
  }


})
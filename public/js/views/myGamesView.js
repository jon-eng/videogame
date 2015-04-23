App.Views.MyGames = Backbone.View.extend({
  el: '#profile-view',

  initialize: function() {
    console.log("mygames collection view");
    this.listenTo(this.collection, "sync", this.renderAll);
  },

  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(game){
    var profileView = new App.Views.MyGame({model: game});
    this.$el.append(profileView.el);
  }

});
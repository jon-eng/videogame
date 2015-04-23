App.Views.MyGame = Backbone.View.extend({

  initialize: function(){
    this.profileTemplate = Handlebars.compile($('#profile-template').html());
    this.render();
  },

  

  render: function(){

    var data = this.model.toJSON();
    console.log(data)
    // debugger
    var compiledTemplate = this.profileTemplate(data);
    this.$el.html(compiledTemplate);
  },

})
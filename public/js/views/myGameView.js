App.Views.MyGame = Backbone.View.extend({

  initialize: function(){
    this.profileTemplate = Handlebars.compile($('#profile-template').html());
    this.render();
  },

  events: {
    'click #delete-button': 'deleteGame'
  },

  // deleteGame: function(){

  //   $.ajax({
  //     method: 'DELETE',
  //     url: '/games/' + id
  //   })
  //   .done();
  // },

  render: function(){

    var data = this.model.toJSON();
    console.log(data)
    // debugger
    var compiledTemplate = this.profileTemplate(data);
    this.$el.html(compiledTemplate);
  },

})
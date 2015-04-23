var expect = require('chai').expect;
var Game = require('../models').games;

describe('Game', function(){

  var nullGame,
      invalidGame,
      validGame;

  context('null game', function() {

    beforeEach('build a null game', function(){
      nullGame = Game.build();
    });

    it('should validate the presence of a name', function(done){
      nullGame
        .validate()
        .then(function(err){
          var error_fields = err.errors.map(function(error){
            return error.path; });
          expect(error_fields).to.include('name');
          done();
        });
    });

    it('should validate the presence of a image', function(done){
      nullGame
        .validate()
        .then(function(err){
          var error_fields = err.errors.map(function(error){
            return error.path; });
          expect(error_fields).to.include('image');
          done();
        });
    });

    it('should validate the presence of a deck', function(done){
      nullGame
        .validate()
        .then(function(err){
          var error_fields = err.errors.map(function(error){
            return error.path; });
          expect(error_fields).to.include('deck');
          done();
        });
    });

    it('should validate the presence of a platforms', function(done){
      nullGame
        .validate()
        .then(function(err){
          var error_fields = err.errors.map(function(error){
            return error.path; });
          expect(error_fields).to.include('platforms');
          done();
        });
    });

  });
});

var expect = require('chai').expect;
var User = require('../models').users;

describe('User', function(){

  var nullUser,
      invalidUser,
      validUser;

  context('null user', function() {

    beforeEach('build a null user', function(){
      nullUser = User.build();
    });

    it('should validate the presence of a username', function(done){
      nullUser
        .validate()
        .then(function(err){
          var error_fields = err.errors.map(function(error){
            return error.path; });
          expect(error_fields).to.include('username');
          done();
        });
    });

    it('should validate the presence of a password_digest', function(done){
      nullUser
        .validate()
        .then(function(err){
          var error_fields = err.errors.map(function(error){
            return error.path; });
          expect(error_fields).to.include('password_digest');
          done();
        });
    });

    it('should validate the presence of a email', function(done){
      nullUser
        .validate()
        .then(function(err){
          var error_fields = err.errors.map(function(error){
            return error.path; });
          expect(error_fields).to.include('email');
          done();
        });
    });

  });
});




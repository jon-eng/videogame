"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {msg: 'Name cannot be blank'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Password cannot be blank'}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Email cannot be blank'},
        isEmail: {msg: 'Please enter valid email'}
      }
    }

  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        users.hasMany(models.games, {foreignKey: 'user_id'});
      }
    }
  });
  return users;
};
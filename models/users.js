"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    //validate presence and uniqueness of name
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {msg: 'Name cannot be blank'}
      }
    },
    //validate presence of password
    password_digest: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Password cannot be blank'}
      }
    },
    //validate presence of password and valid email
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
    //Association a many to many relationship
    //between games and users
    classMethods: {
      associate: function(models) {
        users.belongsToMany(models.games, {
          through: 'games_users',
          foreignKey: 'user_id'
        });
      }
    }
  });
  return users;
};
"use strict";
module.exports = function(sequelize, DataTypes) {
  var games = sequelize.define("games", {
    name: {
      //validate presence of game title
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {msg: 'Game title cannot be blank'}
      }
    },

    deck: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    underscored: true,
    //Association a many to many relationship
    //between games and users
    classMethods: {
      associate: function(models) {
        games.belongsToMany(models.users, {
          through: 'games_users',
          foreignKey: 'game_id'
        });
      }
    }
  });
  return games;
};
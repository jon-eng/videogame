"use strict";
module.exports = function(sequelize, DataTypes) {
  var games = sequelize.define("games", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {msg: 'Game title cannot be blank'}
      }
    },

    deck: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    developers: {
      type: DataTypes.STRING,
      allowNull: false
    },
    similar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER
    }
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        games.belongsTo(models.users, {
          foreignKey: 'user_id'
        });
      }
    }
  });
  return games;
};
"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("games", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        // unique:true
      },
      deck: {
        type: DataTypes.TEXT
      },
      image: {
        type: DataTypes.STRING
      },
      platforms: {
        type: DataTypes.STRING
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("games").done(done);
  }
};
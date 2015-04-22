"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("games_users", {
      game_id: {
        type: DataTypes.INTEGER
      },
      user_id: {
        type: DataTypes.INTEGER
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
    migration.dropTable("games_users").done(done);
  }
};
"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("games_users", {
      games_id: {
        type: DataTypes.INTEGER
      },
      users_id: {
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
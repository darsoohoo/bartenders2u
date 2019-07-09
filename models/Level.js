const mongoose = require('mongoose');


const LevelSchema = new mongoose.Schema({
  title: {
    type: String
  },
  price: {
    type: String
  }
});

module.exports = Level = mongoose.model('level', LevelSchema);


/*
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Level = sequelize.define('Level', {
    title: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
  Level.associate = function(models) {
    // associations can be defined here
    Level.hasMany(models.Service, {
      foreignKey: "levelId",
      as: "services"
    });
  };
  return Level;
 
};
 */
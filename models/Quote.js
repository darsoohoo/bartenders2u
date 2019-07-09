const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  eventDate: {
    type: String,
  },
  eventStartTime: {
    type: String,
  },
  eventEndTime: {
    type: String,
  },
  venueName: {
    type: String,
  },
  address1: {
    type: String,
  },
  address2: {
    type: String,
  },
  package: {
    type: String,
  },
  packagePrice: {
    type: String,
  },
  eventSize: {
    type: String,
  },
  eventType: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  }
})

module.exports = Quote = mongoose.model('quote', QuoteSchema);

/*
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Quote = sequelize.define('Quote', {
    eventDate: DataTypes.STRING,
    eventStartTime: DataTypes.STRING,
    eventEndTime: DataTypes.STRING,
    venueName: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    package: DataTypes.STRING,
    packagePrice: DataTypes.FLOAT,
    eventSize: DataTypes.STRING,
    eventType: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {});
  Quote.associate = function(models) {
    // associations can be defined here
  };
  return Quote;
};
*/
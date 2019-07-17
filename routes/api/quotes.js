const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Quote = require('../../models/Quote');
const auth = require('../../middleware/auth');


router.post('/submit-request', (req, res) => {
  const newQuote = new Quote({
    eventDate: req.body.date,
    eventStartTime: req.body.startTime,
    eventEndTime: req.body.endTime,
    venueName: req.body.venueName,
    address1: req.body.address,
    package: req.body.selectedPackage,
    packagePrice: req.body.packagePrice,
    eventSize: req.body.eventSize,
    eventType: req.body.eventType,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phoneNumber,
    estimatedTotal: req.body.estimatedTotal

  });

  newQuote.save().then(quote => res.json(quote));
})


module.exports = router;

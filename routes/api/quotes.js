const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Quote = require('../../models/Quote');
const auth = require('../../middleware/auth');


router.post('/submit-request', (req, res) => {
  const newQuote = new Quote({
    date: req.body.date
  });

  newQuote.save().then(quote => res.json(quote));
})


module.exports = router;

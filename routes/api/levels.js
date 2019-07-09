const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');
const Level = require('../../models/Level');



router.get('/data', async (req, res) => {
    try {
      const levels = await Level.find().sort({ date: -1 });
      res.json(levels);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});


module.exports = router;

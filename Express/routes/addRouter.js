const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = express.Router();

router.post('/', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400)
    res.render('form');
  });

  module.exports = router;
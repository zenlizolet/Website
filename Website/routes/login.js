var express = require('express');
var path = require('path');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

module.exports = router;
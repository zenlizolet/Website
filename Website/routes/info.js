var express = require('express');
var path = require('path');
var router = express.Router();

/* GET info page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/info.html'));
});

module.exports = router;
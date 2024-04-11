var express = require('express');
var path = require('path');
var router = express.Router();

/* GET houses page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/houses.html'));
});

module.exports = router;
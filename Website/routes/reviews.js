var express = require('express');
var path = require('path');
var router = express.Router();

/* GET reviews page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/reviews.html'));
});

module.exports = router;
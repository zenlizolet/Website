var express = require('express');
var path = require('path');
var router = express.Router();

/* GET author page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/setting.html'));
});

module.exports = router;
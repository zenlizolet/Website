var express = require('express');
var path = require('path');
var router = express.Router();

/* GET catalog page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/catalog.html'));
});

module.exports = router;
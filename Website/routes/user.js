var express = require('express');
var path = require('path');
var router = express.Router();

/* GET user page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/user.html'));
});

module.exports = router;
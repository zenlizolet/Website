var express = require('express');
var path = require('path');
var router = express.Router();

/* GET sequels page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/sequels.html'));
});

module.exports = router;
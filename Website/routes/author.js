var express = require('express');
var router = express.Router();

/* GET author page. */
router.get('/', function(req, res, next) {
  res.send('Author page');
});

module.exports = router;
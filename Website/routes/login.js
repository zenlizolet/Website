var express = require('express');
var router = express.Router();

/* GET catalog page. */
router.get('/', function(req, res, next) {
  res.send('Login page');
});

module.exports = router;
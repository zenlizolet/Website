var express = require('express');
var path = require('path');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  if (req.session.userId) {
    // Get the user from the database and attach it to the request object
    getUserById(req.session.userId).then(user => {
      req.user = user;
      next();
    });
    res.sendFile(path.join(__dirname, '../public/login.html'));
    console.log("user = ", req.user);
  } else {
    next();
  }
  
});


module.exports = router;
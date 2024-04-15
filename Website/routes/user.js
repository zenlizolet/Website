var express = require('express');
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db.sqlite3');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/user.html'));
});

// Delete book out of reservations.
router.delete('api/user-reservations/', (req, res) => {
  const reservationId = req.params.id;

  // Delete the reservation from the database
  db.run('DELETE FROM reservation WHERE reservation_id = ?', [reservationId], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    return res.json({ success: true, message: 'Reservation cancelled successfully' });
  });
});

module.exports = router;
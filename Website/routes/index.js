const express = require('express');
const router = express.Router();

// GET home page
router.get('/', (req, res) => {
    res.sendFile('index', { title: 'Express' });
});

module.exports = router;
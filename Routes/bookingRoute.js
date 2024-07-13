const express = require('express');
const { bookRoom } = require('../controllers/booking.js');
const router = express.Router();

router.post('/bookings', bookRoom);

module.exports = router;

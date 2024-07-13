const express = require('express');
const { createRoom, listRooms } = require('../controllers/room.js');
const router = express.Router();

router.post('/rooms', createRoom);
router.get('/rooms', listRooms);

module.exports = router;

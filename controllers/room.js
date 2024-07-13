const data = require('../data.js');

const createRoom = (req, res) => {
    const { numberOfSeats, amenities, pricePerHour } = req.body;
    const room = {
        id: data.rooms.length + 1,
        numberOfSeats,
        amenities,
        pricePerHour
    };
    data.rooms.push(room);
    res.status(201).json(room);
};

const listRooms = (req, res) => {
    const roomBookings = data.rooms.map(room => {
        const roomBooking = data.bookings.filter(booking => booking.roomId === room.id);
        return {
            ...room,
            bookings: roomBooking
        };
    });
    res.json(roomBookings);
};

module.exports = { createRoom, listRooms };

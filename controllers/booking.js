const data = require('../data.js');

const isRoomAvailable = (roomId, date, startTime, endTime) => {
    return !data.bookings.some(booking => 
        booking.roomId === roomId &&
        booking.date === date &&
        ((startTime >= booking.startTime && startTime < booking.endTime) ||
        (endTime > booking.startTime && endTime <= booking.endTime) ||
        (startTime <= booking.startTime && endTime >= booking.endTime))
    );
};

const bookRoom = (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;

    if (!isRoomAvailable(roomId, date, startTime, endTime)) {
        return res.status(400).json({ message: 'Room is not available for the selected time slot.' });
    }

    const booking = {
        id: data.bookings.length + 1,
        customerName,
        date,
        startTime,
        endTime,
        roomId
    };

    data.bookings.push(booking);

    if (!data.customers.includes(customerName)) {
        data.customers.push(customerName);
    }

    res.status(201).json(booking);
};

module.exports = { bookRoom };

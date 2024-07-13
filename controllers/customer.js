const data = require('../data.js');

const listCustomers = (req, res) => {
    const customerBookings = data.customers.map(customer => {
        const customerBooking = data.bookings.filter(booking => booking.customerName === customer);
        return {
            customerName: customer,
            bookings: customerBooking
        };
    });
    res.json(customerBookings);
};

const listCustomerBookings = (req, res) => {
    const { customerName } = req.params;
    const customerBookings = data.bookings.filter(booking => booking.customerName === customerName);
    res.json(customerBookings);
};

module.exports = { listCustomers, listCustomerBookings };

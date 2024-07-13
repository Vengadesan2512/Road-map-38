const express = require('express');
const { listCustomers, listCustomerBookings } = require('../controllers/customer.js');
const router = express.Router();

router.get('/customers', listCustomers);
router.get('/customer-bookings/:customerName', listCustomerBookings);

module.exports = router;

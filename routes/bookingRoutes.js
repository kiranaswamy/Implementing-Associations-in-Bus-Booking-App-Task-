const express = require('express');
const route = express.Router();
const bookingController = require('../controller/BookingController');

route.post('/addBooking', bookingController.addBooking);

console.log("Booking routes loaded");
module.exports = route;

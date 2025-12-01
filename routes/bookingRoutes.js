const express = require('express');
const bookingController = require('../controller/BookingController');

const router = express.Router();

router.post('/add', bookingController.addBooking);

router.put('/update/:id', bookingController.updateBooking);

router.delete('/delete/:id', bookingController.deleteBooking);

// Optional: Get all bookings (uncomment if needed)
// router.get('/all', bookingController.getAllBookings);

module.exports = router;

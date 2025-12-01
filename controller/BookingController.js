const User = require('../model/userModel');
const Bus = require('../model/busModel');
const Booking = require('../model/bookingModel');

const createBookingFlow = async (req, res) => {
  try {
    // req.body must contain: user, bus, booking
    const { user, bus, booking } = req.body;

    // 1. Create user
    const createdUser = await User.create(user);

    // 2. Create bus
    const createdBus = await Bus.create(bus);

    // 3. Create booking (using user.id & bus.id)
    const createdBooking = await Booking.create({
      seatNumber: booking.seatNumber,
      userId: createdUser.id,   // relation
      busId: createdBus.id      // relation
    });

    res.status(201).json({
      user: createdUser,
      bus: createdBus,
      booking: createdBooking
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createBookingFlow };

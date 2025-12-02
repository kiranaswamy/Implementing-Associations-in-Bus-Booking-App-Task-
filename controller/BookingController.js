const Booking = require('../model/bookingModel');

const addBooking = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body;

    if (!userId || !busId || seatNumber == null) {
      return res.status(400).send('userId, busId, and seatNumber are required');
    }

    const booking = await Booking.create({
      userId: userId,
      busId: busId,
      seatNumber: seatNumber
    });

    res.status(201).json({ message: 'Booking is created!', booking });
  } catch (err) {
    console.log(err);
    res.status(500).send('Failed to create booking');
  }
};

module.exports = { addBooking };

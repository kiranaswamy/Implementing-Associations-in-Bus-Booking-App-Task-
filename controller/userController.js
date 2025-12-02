const User = require('../model/userModel');
const Booking = require('../model/bookingModel')
const Bus = require('../model/busModel')

const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name: name, email: email });
    res.status(201).send(`User with name: ${name} is created!`);
  } catch (err) {
    console.log(err);
    res.status(500).send('Failed to create user');
  }
};

const getUserWithBooking = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findAll({
      where: { id: userId },
      include: [
        {
          model: Booking,                // All bookings of the user
          include: [
            {
              model: Bus                // Bus details for each booking
            }
          ]
        }
      ]
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};


module.exports = { addUser,getUserWithBooking };

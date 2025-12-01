const User = require('../model/userModel');
const Booking = require('../model/bookingModel');

const addValue = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error adding user');
  }
};


const bookingSeatsForUsers = async (req, res) => {
  try {
    const user =await User.create(req.body.user);
    const booking = await Booking.create({
      ...req.body.Booking,
      busId:bus.id,
    });

    res.status(201).json({ user, booking });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

const updateValue = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const existing = await User.findByPk(id);
    if (!existing) return res.status(404).send('User not found');

    if (name) existing.name = name;

    await existing.save();
    res.status(200).send(existing);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error updating user');
  }
};

const deleteValue = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({ where: { id } });
    if (!deleted) return res.status(404).send('User not found');
    res.status(200).send('User deleted');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error deleting user');
  }
};

module.exports = { addValue, updateValue, deleteValue, bookingSeatsForUsers };

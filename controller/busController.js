const Bus = require('../model/busModel');

const addBus = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;
    const data = await Bus.create({ busNumber, totalSeats, availableSeats });
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error adding bus');
  }
};

const updateBus = async (req, res) => {
  try {
    const { id } = req.params;
    const { busNumber } = req.body;

    const existing = await Bus.findByPk(id);
    if (!existing) return res.status(404).send('Bus not found');

    if (busNumber) existing.busNumber = busNumber;

    await existing.save();
    res.status(200).send(existing);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error updating bus');
  }
};

const deleteBus = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Bus.destroy({ where: { id: Number(id) } });
    if (!deleted) return res.status(404).send('Bus not found');
    res.status(200).send('Bus deleted');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error deleting bus');
  }
};

module.exports = { addBus,updateBus,deleteBus };

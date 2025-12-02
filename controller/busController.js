const Bus = require('../model/busModel');

const addBus = async (req, res) => {
  try {
    const { busNumber, totalSeats } = req.body;
    const bus = await Bus.create({
      busNumber: busNumber,
      totalSeats: totalSeats,
      availableSeats: totalSeats
    });
    res.status(201).send(`Bus with number: ${busNumber} is created!`);
  } catch (err) {
    console.log(err);
    res.status(500).send('Failed to create bus');
  }
};

module.exports = { addBus };

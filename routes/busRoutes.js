const express = require('express');
const route = express.Router();
const busController = require('../controller/busController');

route.post('/addBus', busController.addBus);

console.log("Bus routes loaded");
module.exports = route;

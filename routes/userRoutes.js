const express = require('express');
const route = express.Router();
const userController = require('../controller/userController');

route.post('/addUser', userController.addUser);
route.get(`/user/:userId`,userController.getUserWithBooking)

module.exports = route;

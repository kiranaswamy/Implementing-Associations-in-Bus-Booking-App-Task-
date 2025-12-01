const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/add',userController.addValue); 
router.put('/update/:id',userController.updateValue);            
router.delete('/delete/:id',userController.deleteValue);
router.post('/book', userController.bookingSeatsForUsers);
         
module.exports = router;

const express = require('express');
const busController = require('../controller/busController');

const router = express.Router();

router.post('/add',busController.addBus); 
router.put('/update/:id',busController.updateBus);            
router.delete('/delete/:id',busController.deleteBus);
// router.get('/all', userController.getUsers);
         
module.exports = router;

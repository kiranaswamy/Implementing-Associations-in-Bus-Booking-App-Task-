const express = require('express');
const app = express();
app.use(express.json());

const db  =require('./utils/db-connection');
//  require('./model/index');
const user = require('./model/userModel');
const bus = require('./model/busModel');
const booking = require('./model/bookingModel');



const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

user.hasMany(booking);
booking.belongsTo(user);

bus.hasMany(booking)
booking.belongsTo(bus)

app.get('/',(req,res)=>{
    res.send('server is created')
})

app.use('/user',userRoutes);
app.use('/bus',busRoutes);
app.use('/booking',bookingRoutes)

db.sync()
.then(()=>{
    app.listen(3000,()=>{
    console.log('Server is running')
})
}).catch((err)=>{
    console.log(err)
})


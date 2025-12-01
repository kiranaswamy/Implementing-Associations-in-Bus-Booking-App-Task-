const express = require('express');
const app = express();
app.use(express.json());


const userRoute = require('./routes/userRoutes');
const busRoute = require('./routes/busRoutes');
const bookingRoute = require('./routes/bookingRoutes')
require('./model');

const db = require('./utils/db-connection')

app.use('/api',userRoute);
app.use('/bus',busRoute);
app.use('/book',bookingRoute);


app.get('/',(req,res)=>{
    res.send('server is created')
})

db.sync({force:true})
.then(()=>{
    app.listen(3000,()=>{
    console.log('Server is running')
})
}).catch((err)=>{
    console.log(err)
})

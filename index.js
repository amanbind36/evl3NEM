const express = require("express")
const app = express()
const sqlconnection = require('./db/sql')
const mongodb = require('./db/mongodb')
const doctorRoutes = require('./routes/doctorRoutes')
const patientRoutes = require('./routes/patientRoutes')
const appointmentRoutes = require('./routes/appointmentRoutes')
app.use(express())


app.use('/api', doctorRoutes)
app.use('/api', patientRoutes)
app.use('/api', appointmentRoutes)



app.listen(6000 , async() =>{
    await mongodb;
    await sqlconnection
    console.log(`server running `);
})
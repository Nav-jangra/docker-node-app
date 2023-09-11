const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const MongooseModule = require('./schema/mongooseSchema')
const registerRoute = require('./Routes/register')
const PORT = 3000

const app = express()

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(registerRoute)


//app.use(MongooseModule)

// Fetching all the employees



app.listen(PORT, (req,res) =>{
    console.log(`Server is up and running at ${PORT}`)
})

const mongoose = require('mongoose')
const { Timestamp } = require('mongodb');

// for tasks
const tasks = new mongoose.Schema({
    id : {
        type : String ,
        required : true
    },
    Description : String,
    ETD : Timestamp, 
    Email : {
        type : String,
        required : true
    }
})
const taskSchema = mongoose.model("task",tasks)
module.exports = taskSchema
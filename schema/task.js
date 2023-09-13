const mongoose = require('mongoose')
const { Timestamp, ObjectId } = require('mongodb');

// for tasks
const tasks = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId, ref: 'User'  ,
        required : true
    },
    description : String,
    etd : Date, 
})
const taskSchema = mongoose.model("task",tasks)
module.exports = taskSchema
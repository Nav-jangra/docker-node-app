const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')
const dbTask = require('../schema/task')
const db = require('../schema/user')
const jwt = require('jsonwebtoken')
const secret = 'supersecret'

const create = async (model,res) => {
    var token = model.header("token");
    const description = model.body.description
    const etd = model.body.etd

    let id = "";
    try{
        const decodedToken =  jwt.verify(token, secret)
        id = decodedToken.id
    }catch(err){
        res.json({answer : " Something has happened"})
    }
    const task = {
        user: id,
        description: description,
        etd: etd
    }

    //saving the data in the database
    try {
        await dbTask(task).save()
        console.log('added')
        res.json({ "message": 'Task added succesfully' })

    } catch (err) {
        console.log(err);
        res.json({ "message": 'There were some issue' })

    }
}


// service to show the tasks of the user
const get = async(model,res) => {
    try {
        const token = model.header('token')
        const decodedToken =  jwt.verify(token, secret)
        let id = new mongoose.Types.ObjectId(decodedToken.id)

        const Task = await dbTask.collection.find({ "user":  id }).toArray()

        var tasks = Task.map(function(doc) { return {description: doc.description ,etd : doc.etd} });

        if (tasks === null) {
            res.json({message : "not found"})
        }
        else {
            res.json({ tasks }) 
        }

    } catch(err){
        res.json({message : "Some error has occured"})
    }  
}


module.exports = {
    create,
    get,
}

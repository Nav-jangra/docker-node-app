const dbTask = require('../schema/task')
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

const get = async(id,res) => {
    try {
        const Task = await dbTask.collection.find({ "id": id }).toArray()
        if (Task === null) {
            res.json({message : "not found"})
        }
        else {
            res.json({ Task })
            
        }
    } catch(err){
        console.log('its over ')
        res.json({message : "Some error has occured"})
    }  
}


module.exports = {
    create,
    get,
}

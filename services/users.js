const db = require('../schema/user')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt')

const secret = 'supersecret'

const create = async (model,res) => {
    

    try{

        var user_name = (model.name);
        var password = (model.password);
        var email = (model.email);
        //encrypting the password
        password =  await bcrypt.hash(password, 10)

        const User = await db.collection.findOne({ $or: [{"name": user_name} ,{ "email" : email}]})
        if (User != null) {
            return res.status(400).send({
                message: 'User already exists.'
            })
        }
        else {
            let user = {
                name: user_name,
                pass: password,
                email : email
            }

            //saving the data in the database
            if (user_name != undefined && password != undefined && email != undefined) {
                try{
                    db(user).save()
                     console.log('added');
                }catch(err) {
                        console.log(err);
                    }
                res.status(200).send({ "message": 'User registered successfully' })
            }
            else{
                res.status(400).send({message : 'something happened'})
            }
        }
    }catch(error){
        res.status(400).send({message : 'something happened'})
    }
    
}

const getById = async(model, res) =>{
    const o_id = new ObjectId(model._id)
    const id = {
        "_id": new mongoose.Types.ObjectId(o_id)
    }

    //searching the data by the id and displaying the data
    try{
        const ans = await db.collection.find(id).toArray()
        res.json(ans);
    }
    catch(err){
        res.json({message : "something happened"})
    }
    
}



const get = async (res) => {
    try{
        const ans = await db.collection.find({}).toArray()
        res.json(ans);
    }
    catch(err){
        res.json({message : "something happened"})
    }

}



const search = async(model,res) => {
    let user_name = (model.name);
    let password = (model.password);


    try{
        const User = await db.collection.findOne({ "name": user_name })
        if (User === null) {
            return res.status(400).send({
                message: 'User not found.'
            })
        }
        else {
            if (bcrypt.compare(password, User.pass)) {
                jwt.sign({ id : User._id }, secret, { expiresIn: '2h' }, (err, token) => {
                    res.json({ token })
                })
            }
            else {
                res.status(400).send({
                    message: 'User name or password is wrong'
                })
            }
        }
    } catch(err){
        res.json({message : "something has happened"})
    }
    
}


module.exports = {
    create,
    get,
    search,
    getById
}
const express = require('express')
const dotenv = require('dotenv');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('../schema/mongooseSchema')
const dbTask = require('../schema/taskSchema')
const routeFilter = require('../middleware');
const { ObjectId } = require('mongodb');

const saltRounds = 10
const secret = 'supersecret'

const router = express.Router();
router.use(express.json());
dotenv.config();

//coneecting with the database

mongoose.connect("mongodb://localhost:27017/Employees" ,{ useNewUrlParser: true });

const connection = mongoose.connection

connection.on('connected',()=>{
    console.log('Database Connected Successfully.')
})

//router.use(routeFilter)


router.get('/',routeFilter ,(req, res) => {
    res.status(200).send('successful');
  
});


// router for registering the user
router.post('/register', (req, res) =>{

    var user_name = (req.body.name);
    var password = (req.body.password);

    const User = db.collection.findOne({"name" : user_name}, (err,User) =>{
    })
    if(User != null){
        return res.status(400).send({
            message : 'User already exists.'
        })
    }
    else {
        bcrypt.hash(password, 10, function(err, hash) {

            if(err)console.error(err.message)
            else this.password = hash
            // store hash in the database
        });

        const user = {
            name : user_name,
            pass : password
        }
        
        //saving the data in the database
        if(user_name != undefined && password != undefined){
            db(user).save()
            .then((doc) =>{ console.log('added');})
            .catch((err) =>{
                console.log(err);
            })
            res.send({"message" :'registered succesfully'})
        }
    }
})

// routes for seeing all the user data after checking if the user is logged in
router.post('/allUser', routeFilter,(req,res) =>{
    //if token is verified then it is going to perform operation
    db.collection.find({}).toArray().then((ans) =>{
        res.send(ans);
    })
 
})



//router for showing data of the user based on the given id

router.post('/user/:_id', routeFilter,(req,res) =>{
    //if token is verified then it is going to perform operation
    const o_id = new ObjectId(req.params._id)
    const id = {
        "_id" : new mongoose.Types.ObjectId(o_id)
    }
    
    //searching the data by the id and displaying the data
    db.collection.find(id).toArray().then((ans) => {
        res.send(ans);
    })
})



// router for logging in the user
router.post('/login', (req, res) =>{
    var user_name = (req.body.name);
    var password = (req.body.password);
    const User = db.collection.findOne({"name" : user_name}, (err,User) =>{
        if(User === null){
            return res.status(400).send({
                message : 'User not found.'
            })
        }
        else{
            if(User.pass === password){
            jwt.sign({User}, secret, {expiresIn : '2h'}, ( err,token) =>{
                res.json({token})
            })}
            else {
                res.status(400).send({
                    message : 'User name or password is wrong'
                })
            }
        }
    })
})



// router for creating task
router.post('/createTask',routeFilter, async (req,res) =>{
    const id = req.body.id
    const Description = req.body.Description
    const ETD = req.body.ETD
    const Email  = req.body.email

    const task = {
        id : id,
        Description : Description,
        ETD : ETD,
        Email : Email
    }
    
    //saving the data in the database
    dbTask(task).save()
    .then((doc) =>{ console.log('added');})
    .catch((err) =>{
        console.log(err);
    })
    res.send({"message" :'Task added succesfully'})
})

//router for showing tasks
router.post('/showTasks',routeFilter,(req,res) =>{
    const id = req.body.id
    dbTask.collection.find({"id" : id}).toArray().then((Task) =>{
        if(Task === null){
            return res.status(400).send({
                message : 'Task not found.'
            })
        }
        else{
            res.json({Task})
        }
    })
})




module.exports = router


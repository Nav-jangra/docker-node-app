const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const routeFilter = require('../middleware');
const taskService = require("../services/tasks")
const userService = require("../services/users")

const router = express.Router();
router.use(express.json());
dotenv.config();

//coneecting with the database

mongoose.connect("mongodb://localhost:27017/Employees", { useNewUrlParser: true });

const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Database Connected Successfully.')
})



// router for registering the user

router.post('/register', async(req, res) => {
    await userService.create(req.body,res)  
})


// router for logging in the user

router.get('/login', async(req, res) => {
    await userService.search(req.body,res)
})


// routes for seeing all the user data after checking if the user is logged in

router.get('/allUser', routeFilter, async(req, res) => {
    await userService.get(res)
})



//router for showing data of the user based on the given id

router.get('/user/:_id', routeFilter, async(req, res) => {
    await userService.getById(req.params,res)
})




// router for creating task

router.post('/task', routeFilter, async (req, res) => {
    await taskService.create(req,res)
})

//router for showing tasks

router.get('/showTasks', routeFilter, async(req, res) => {
    await taskService.get(req.body.id,res)
})




module.exports = router


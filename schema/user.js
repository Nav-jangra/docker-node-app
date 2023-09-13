const mongoose = require('mongoose')
const express = require('express');
const { Timestamp } = require('mongodb');
const employeeSchema = new mongoose.Schema({
    name : String,
    pass : String,
    email : String
});

//const EmployeeData = new mongoose.Schema(employeeSchema);
const shchema  = mongoose.model("employe",employeeSchema) 
module.exports = shchema
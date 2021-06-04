const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const employee = require('./model/Employee.model');
const DB_URI = 'mongodb+srv://root:root@cluster0.c0dke.mongodb.net/employee';
app.use(cors());
app.use(express.json());

mongoose.connect(DB_URI, {useNewUrlParser : true, useUnifiedTopology : true});
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('connection to the mongoose is successfull..!!');
})

app.get('/', (req,res) =>{
    employee.find()
    .then(data =>console.log(data))
    .catch(err => console.log(err));
    res.send("In Employee");
});

app.get('/', (req,res) =>{
    res.send("listening to port 3000...!!");
})

app.get('/employee', (req,res) =>{
    fs.readFile('db.json', (err, data) =>{
        console.log(data);
        res.end(data);
    })
})









app.listen(3000);
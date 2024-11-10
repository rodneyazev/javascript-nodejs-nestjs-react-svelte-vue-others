const { response, json } = require('express');
const express = require('express');
const mongoose = require('mongoose');

const server = express();
const StudentSchema = require("./schemas/schema");

server.use(express.json());

// Add here the uri, username and password of your mongodb server
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://mongodb:mongodb@localhost:27017/?authMechanism=DEFAULT');


server.post('/student', async (req,res) => {
    
    // const name = req.body.name;
    // const matriculation = req.body.matriculation;
    // const discipline = req.body.discipline;

    const {name, matriculation, discipline} = req.body;
    const student = await StudentSchema.create({name: name, matriculation, discipline});

    res.status(201).json(student);
})

server.get('/student', async (request, response)=>{
    const student = await StudentSchema.find();
    return response.status(200).json(student);
})

server.get('/student/:id', async (request, response)=>{
    const {id} = request.params;
    const student = await StudentSchema.findById(id);
    return response.status(200).json(student);
})


server.put('/student/:id', async(req,res)=>{
    const {id} = req.params;
    const student = await StudentSchema.updateOne({'_id':id},req.body);
    res.status(200).json(student);
})


server.delete('/student/:id', async (req,res)=>{
    const {id} = req.params;
    const student = await StudentSchema.deleteOne({'_id':id});
    res.status(200).json(student);
})



server.listen(3000, ()=> console.log("Server started => http://localhost:3000/"))
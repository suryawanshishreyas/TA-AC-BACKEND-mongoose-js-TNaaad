var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');

// importing schema
var User = require('./models/user');

var app = express();

// connecting to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/sample'
).then(()=>{
    console.log(`Database is connected`);
}).catch(()=>{
    console.log(`Failed to connect to database`);
})

// in-build middlewares
app.use(express.json());
app.use(logger('dev'));


// routing middlewares
    //creating a user using POST method
    app.post('/users',async(req,res)=>{
        const user = new User(req.body);
        try{
            await user.save();
            res.send(user);
        }
        catch(error){
            res.status(500).send(error)
        }
    });

    // finding a user from database
app.get('/users',async(req,res)=>{
    const users = await User.find({});

    try{
        res.send(users);
    }
    catch(error){
        res.status(500).send(error)
    }
})
    // finding single user 
app.get('/user',async(req,res)=>{
    const user = await User.findOne({name:"Rohan"}).exec();
    res.send(user);
})
    //finding user by id
app.get('/users/:id', async(req,res)=>{
    var id = req.params.id;
    const user = await User.findById(id);
    try{
        res.send(user);
    }
    catch(error){
        res.status(500).send(error);
    }
})
    // finding one user using findOne
app.get('/users', async(req,res)=>{
    var id = req.params.id;
    const user = await User.findOne(id);
    try{
        res.send(user);
    }
    catch(error){
        res.status(500).send(error);
    }
})
    /*find is used to find a specific query and returns all results
    where as findOne() returns first result matching the query
    */

// Updating a user using
// findByIdandUpdate
app.put('/users/:id',async(req,res)=>{
    try{
        const users = await User.findByIdAndUpdate(req.params.id, req.body , {new: true});
        await users.save();
        res.json(users);
    }
    catch(error){
        res.status(500).send(error);
    }
})

//Using updateOne
app.put('/users', async(req,res)=>{
    try{
        const users = await User.updateOne({name:'Shreyas'},{email:'exammplexyz@gmail.com'},{new:true});
        res.json(users);
    }
    catch(error){
        res.status(500).send(error);
    }
})
// Deleting a user 
app.delete('/users/:id',async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) res.status(500).send('No User Found!');
        res.send('Success');
    }
    catch(err){
        res.status(500).send(err);
    }
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000`);
})
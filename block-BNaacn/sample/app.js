var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb"//127.0.0.1:27107/sample',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log('Success');
}).catch(()=>{
    console.log('Failed to connect to database');
})

app.use('/index',(req,res,next)=>{
    if(req.method == 'GET'){
        res.send('Welcome');
    }
    else{
        res.status(404).send('URL not found');
    }
    next();
})

app.get('/home',(req,res)=>{
    res.send('Welcome to HomePage');
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})
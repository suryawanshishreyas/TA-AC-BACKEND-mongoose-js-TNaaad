var express = require('express');
var mongoose = require('mongoose');
var app = express();
mongoose.connect('mongodb://127.0.0.1:27017/sample',
    {
        usUrlNewParser:true,
        useUnifiedTopology:true
    }
).then(()=>{
    console.log('Success');
}).catch(()=>{
    console.log('Failed to connect');
})

app.use('/home',(req,res,next)=>{
    res.send('Welcome');
    next();
})

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})
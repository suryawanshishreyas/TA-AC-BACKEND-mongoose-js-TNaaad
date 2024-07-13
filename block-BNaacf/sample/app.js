var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');

var app = express();

mongoose.connect('mongodb://localhost:27017/sample',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(()=>{
    console.log('Successfully connected to database');
}).catch(()=>{
    console.log('Failed to connect to database');
})

app.use(logger('dev'));

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to our Webpage</h1>');
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000`);
})
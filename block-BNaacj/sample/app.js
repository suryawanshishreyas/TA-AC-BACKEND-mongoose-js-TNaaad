var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/sample',
    {
    useNewUrlParser: true,
    useUnifiedTechnology:true
    }    
).then(()=>{
    console.log('Successfully connected');
}).catch(()=>{
    console.log(`Failed to connect`);
})

app.use('/home',(req,res,next)=>{
    res.send('Hello');
    next();
})

app.get('/',(req,res)=>{
    res.send('Welcome to our page!');
})

app.post('/submit',(req,res)=>{
    res.send('Submitted successfully');
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000`);
})
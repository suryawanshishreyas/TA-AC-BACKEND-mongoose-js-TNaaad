var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/sample', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to database');
}).catch((err) => {
  console.error(err);
});

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to our page</h1>`)
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000`);
})
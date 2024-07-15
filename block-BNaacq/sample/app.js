var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var User = require('./models/user');
var Comment = require('./models/comment');
var Article = require('./models/article');


var app = express();
mongoose.connect('mongodb://127.0.0.1:27017/sample2',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log('Connect to Database');
}).catch(()=>{
    console.log('Failed to connect to Database');
})

app.use(logger('dev'));
app.use(express.json());


// Routes
    // Creating a user
app.post('/',async(req,res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.send(user);
    }
    catch(error){
        res.status(500).send(error);
    }
})
    // Get all users
app.get('/',async(req,res)=>{
    try{
        const user = await User.find();
        res.send(user);
    }
    catch(err){
        res.status(500).send(err);
    }
})

    // Creating a new article
app.post('/publish',async(req,res)=>{
    try{
        const article = new Article(req.body);
        await article.save();
        res.send(article);
    }
    catch(err){
        res.status(500).send(err);
    }  
})
    // Get all articles
app.get('/articles',async(req,res)=>{
    try{
        const articles = await Article.find();
        res.send(articles);
    }
    catch(err){
        res.status(500).send(err);
    }
})

    // Creating comment
app.post('/comment',async(req,res)=>{
    try{
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).send(comment);
    }
    catch(err){
        res.status(500).send(err);
    }
})

    // Getting comment on specific article
app.get('/article/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        const comment = await Comment.find({article:id}).populate('author');
        res.send(comment);
    }
    catch(err){
        res.status(500).send(err);
    }
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000`);
})
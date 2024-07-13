var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    name:String,
    adult:Boolean,
    age:Number,
    lastName: String
})
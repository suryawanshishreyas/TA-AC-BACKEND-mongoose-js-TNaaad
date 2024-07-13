var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{type:String, lowercase:true},
    age: {type: Number, default:0},
    createdAt: Date,
    isAdmin: Boolean,
    author: String,
    email:{type: String, lowercase: true}
})
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{type: String, required: true},
    password: {type: String, min:5,max:20},
    createdAt:{type:Date, default: '13-07-2024'}
}{timestamps:true})
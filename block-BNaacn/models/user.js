var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String},
    email: {type: String, lowercase: true},
    age: {type: Number, default: 0},
    password: {type: String, min:5},
    createdAt: {type: Date, default:'13-07-2024'},
    favourties: [String]
},{timestamps: true})

var User = mongoose.Model('User',userSchema);

module.exports = User;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type:String, required:true},
    password: {type:String, required: true, min:5, max:20},
    email: {type: String, required: true, match: /@/},
    isAdmin: {type: Boolean},
    age: {type: Number, default: 18, min:18, max:30}
})

var User = mongoose.model('User', userSchema);

module.exports = User;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{type:String, required: true, unique:true, trim:true},
    email:{type:String, required: true},
    age:{type:Number}
},{timestamps: true}
)

var User = mongoose.model('User',userSchema);

module.exports = User;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema({
    village: {type: String},
    city: {type: String, required: true},
    state: {type: String, required: true},
    user: {type:Schema.Types.ObjectId},
    pin: {type: Number}
    
},{timestamps:true})

var Address = mongoose.Model('Address', addressSchema);

module.exports = Address;
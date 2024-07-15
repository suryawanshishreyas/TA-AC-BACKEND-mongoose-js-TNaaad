var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content:{type:String, minlength:8, maxlength:500},
    author: Schema.Types.ObjectId,
    article:{type: String, required: true},
},
{timestamps: true}
)

var Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title:{type: String, unique:true, required: true},
    description: {type: String},
    tags: {type: String },
    likes: {type: Number},
    author: Schema.Types.ObjectId,
    comments:[String],
},
{timestamps: true}
)

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: {type: String},
    description: {type: String},
    tags: [String],
    createdAt: {type: Date, default:'13-07-2024'},
    likes: {type: Number, default: 0}
})

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
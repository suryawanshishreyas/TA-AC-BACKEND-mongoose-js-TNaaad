var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var articleSchema = new Schema({
    title: {type: String, required: true},
    description: {type:String, min:10, max:1000}
})

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
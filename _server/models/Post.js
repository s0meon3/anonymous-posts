const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { CommentSchema } = require('./Comment');

//Create Schema
const PostSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true,
		maxlength: 1000
	},
	claps: {
		type: Number,
		default: 0
	},
	comments: [CommentSchema],
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Post = mongoose.model('post', PostSchema);

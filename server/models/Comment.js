const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CommentSchema = new Schema({
	body: {
		type: String,
		required: true,
		maxlength: 400
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = {
	CommentSchema,
	Comment: mongoose.model('comment', CommentSchema)
};

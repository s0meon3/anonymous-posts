const express = require('express');
const router = express.Router();

//Post Model
const Post = require('../../models/Post');

//Comment Model
const { Comment } = require('../../models/Comment');

//@route   GET api/comments/:postId
//@desc    Get All Comments From A Post
//@access  Public
router.get('/:postId', (req, res) => {
	Post.findById(req.params.postId)
		.then(post => res.json({ comments: post.comments }))
		.catch(err =>
			res.status(404).json({ success: false, error: `Post doesn´t exist` })
		);
});

//@route   POST api/comments/:postId
//@desc    Create Comment
//@access  Public
router.post('/:postId', (req, res) => {
	//Create comment
	newComment = new Comment({
		body: req.body.body
	});

	Post.findById(req.params.postId)
		.then(post => {
			post.comments.push(newComment);
			post
				.save()
				.then(post => res.json(post))
				.catch(err =>
					res.json({ success: false, error: `An error ocurred: ${err}` })
				);
		})
		.catch(err =>
			res.json({ success: false, error: `An error ocurred: ${err}` })
		);
});

module.exports = router;

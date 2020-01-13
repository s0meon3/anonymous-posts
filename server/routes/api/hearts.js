const express = require('express');
const router = express.Router();

//Post Model
const Post = require('../../models/Post');

//Comment Model
const { Comment } = require('../../models/Comment');

//@route   GET api/hearts/:postId/
//@desc    Get Number of hearts From A Post
//@access  Public
router.get('/:postId', (req, res) => {
	Post.findById(req.params.postId)
		.then(post => res.json({ hearts: post.hearts }))
		.catch(err =>
			res.status(404).json({ success: false, error: `Post doesn´t exist` })
		);
});

//@route   PUT api/hearts/:postId
//@desc    Increment hearts From A Post
//@access  Public
router.put('/:postId', (req, res) => {
	Post.findById(req.params.postId)
		.then(post => {
			post.hearts++;
			post
				.save()
				.then(post => res.json(post))
				.catch(err =>
					res.json({ success: false, error: `An error ocurred: ${err}` })
				);
		})
		.catch(err =>
			res.status(404).json({ success: false, error: 'Post doesn´t exist' })
		);
});

module.exports = router;

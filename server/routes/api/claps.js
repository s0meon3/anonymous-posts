const express = require('express');
const router = express.Router();

//Post Model
const Post = require('../../models/Post');

//Comment Model
const { Comment } = require('../../models/Comment');

//@route   GET api/claps/:postId/
//@desc    Get Number of Claps From A Post
//@access  Public
router.get('/:postId', (req, res) => {
	Post.findById(req.params.postId)
		.then(post => res.json({ claps: post.claps }))
		.catch(err =>
			res.status(404).json({ success: false, error: `Post doesn´t exist` })
		);
});

//@route   PUT api/claps/:postId
//@desc    Increment Claps From A Post
//@access  Public
router.put('/:postId', (req, res) => {
	Post.findById(req.params.postId)
		.then(post => {
			post.claps++;
			post
				.save()
				.then(post => res.json(post))
				.catch(err =>
					res.json({ success: false, error: `An error ocurred: ${err}` })
				);
		})
		.catch(err =>
			res.status(404).json({ success: false, error: `Post doesn´t exist` })
		);
});

module.exports = router;

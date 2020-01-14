const express = require('express');
const router = express.Router();

//Post Model
const Post = require('../../models/Post');

//@route   GET api/posts
//@desc    Get All Posts
//@access  Public
router.get('/', (req, res) => {
	Post.find()
		.sort({ date: -1 })
		.then(posts => res.json(posts));
	console.log('request');
});

//@route   POST api/posts
//@desc    Create Post
//@access  Public
router.post('/', (req, res) => {
	//Capitalize all words in the title
	const capAllWords = title => {
		const alphabet = [...Array(26).keys()].map(code =>
			String.fromCharCode(code + 97)
		);

		return title
			.toLowerCase()
			.split(' ')
			.map(word =>
				alphabet.includes(word.charAt(0))
					? word.charAt(0).toUpperCase() + word.slice(1)
					: word
			)
			.join(' ');
	};

	const capitalizedTitle = capAllWords(req.body.title);

	const newPost = new Post({
		title: capitalizedTitle,
		body: req.body.body
	});

	newPost
		.save()
		.then(post => res.json(post))
		.catch(err =>
			res.json({ success: false, error: `An error ocurred: ${err}` })
		);
});

module.exports = router;

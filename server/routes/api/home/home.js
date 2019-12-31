const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static(__dirname));
//@route   GET api/home
//@desc    Sends a HTML file about the API
//@access  Public
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/home.html'));
});

module.exports = router;
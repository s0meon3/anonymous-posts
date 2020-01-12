const path = require('path');
const express = require('express');

//Set server
console.log('Starting server...');
const app = express();

//Bodyparser Middleware
app.use(express.json());

//Static files
app.use(express.static(path.resolve(__dirname, '../client/build')));

//Use Routes
const postsRouter = require('./routes/api/posts');
app.use('/api/posts', postsRouter);

const commentsRouter = require('./routes/api/comments');
app.use('/api/comments', commentsRouter);

const heartsRouter = require('./routes/api/hearts');
app.use('/api/hearts', heartsRouter);

const homeRouter = require('./routes/api/home/home');
app.use('/api/home', homeRouter);

//Greetings
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

module.exports = app;

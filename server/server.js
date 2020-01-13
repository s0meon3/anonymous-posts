const path = require('path');
const express = require('express');

//Set server
console.log('Starting server...');
const app = express();

//Bodyparser Middleware
app.use(express.json());

//Use Routes
const postsRouter = require('./routes/api/posts');
app.use('/api/posts', postsRouter);

const commentsRouter = require('./routes/api/comments');
app.use('/api/comments', commentsRouter);

const heartsRouter = require('./routes/api/hearts');
app.use('/api/hearts', heartsRouter);

const homeRouter = require('./routes/api/home/home');
app.use('/api/home', homeRouter);

//If in production enviroment, execute this code.
//This will make both client and server run under the same domain, just different routes.
process.env.NODE_ENV === 'production' &&
	app.use(express.static(path.resolve(__dirname, '../client/build'))) &&
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
	});

module.exports = app;

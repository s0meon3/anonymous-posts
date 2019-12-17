const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

//Set server
console.log('Starting server...');
const app = express();

//Bodyparser Middleware
app.use(express.json());

//DB Config
console.log('Getting MongoURI...');
const db = config.get('mongoURI');

//Connect to Mongo
console.log('Connecting to MongoDB...');
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Connected to MongoDB!'))
	.catch(err => console.log(err));

//Use Routes
const postsRouter = require('./routes/api/posts');
app.use('/api/posts', postsRouter);

const commentsRouter = require('./routes/api/comments');
app.use('/api/comments', commentsRouter);

const clapsRouter = require('./routes/api/claps');
app.use('/api/claps', clapsRouter)

const homeRouter = require('./routes/api/home/home');
app.use('/api/home', homeRouter);

//Greetings
app.get('/', (req, res) => {
	res.send(
		`Hey there! Welcome to the Anonymous Posts API! Check https://localhost:${port}/api/home to know our API!`
	);
});

//Server listen to port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening to port ${port}`));

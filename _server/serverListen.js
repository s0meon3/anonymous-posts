const app = require('./server');
const mongoose = require('mongoose');
const config = require('config');

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

//Server listen to port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening to port ${port}`));

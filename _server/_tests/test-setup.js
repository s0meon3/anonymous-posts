const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

mongoose.promise = global.Promise;

async function dropAllCollections() {
	const collections = Object.keys(mongoose.connection.collections);
	for (const collectionName of collections) {
		const collection = mongoose.connection.collections[collectionName];

		try {
			await collection.drop();
		} catch (error) {
			if (error.message === 'ns not found') return;

			if (
				error.message.includes('a background operations is currently running')
			)
				return;

			console.log(error.message);
		}
	}
}

async function removeAllCollections() {
	const collections = Object.keys(mongoose.connection.collections);
	for (const collectionName of collections) {
		const collection = mongoose.connection.collections[collectionName];
		await collection.deleteMany();
	}
}

module.exports = {
	setupDB(dbName) {
		beforeAll(async () => {
			await mongoose.connect(dbName, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			});
		});

		afterEach(async () => {
			await removeAllCollections();
		});

		afterAll(async () => {
			await dropAllCollections();
			await mongoose.connection.close();
		});
	}
};

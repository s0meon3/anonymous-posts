# ANONYMOUS POSTS

Anonymous Posts is a open-source project that is friendly for begginers. It´s built upon the MERN Stack and it´s currently under constructions. The basic server is already built and the we´re working on the client side.

## Setup

Fork the repository and clone it in your machine. Cd into the repo and then run the following command to install all dependencies:

```
npm run installDep
```

Before you run the server you need to setup the database, in order to do so you have to create a folder named `config` in the main folder of the project and a file named `default.json`. In the `default.json` file you have to add:

```
{
	"mongoURI": <YOUR_MONGO_URI>
	"mongoTestURI": <YOUR_TEST_MONGO_URI>
}

```

Instead of <YOUR_MONGO_URI> and <YOUR_TEST_MONGO_URI> you should add the URI for your Mongo DataBase and for other Mongo DataBase (for testing), respectively, we use Mongo Atlas.

To run the server with nodemon:

```
cd _server
npm run devServer
```

To run the server without nodemon:

```
cd _server
npm run start
```

## Contributing

All contributions are welcome, but before you start working on a new feature or fixing a bug, you have to open a new Issue on our GitHub page and after your job is done, you open a new PR. Also, ensure to write a test for your feature in the `_tests` folder.

After that, run `npm run test` to test all the files and check if nothing is broken.

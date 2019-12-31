# ANONYMOUS POSTS

Anonymous Posts is a open-source project that is friendly for begginers. It´s built upon the MERN Stack and it´s currently under constructions. The basic server is already built and we´re working on the client side.

## Setup

Fork the repository and clone it in your machine. Cd into the repo and then run the following command to install all dependencies:

```
npm run installDep
```

To be able to test and run the server you have to set some enviroment variables, to do so in the runtime we use 'dotenv' package. Create a file named `.env` and write the following contents:

```
MONGO_URI=<YOUR_MONGO_URI>
MONGO_TEST_URI=<YOUR_TEST_MONGO_URI>
```

Instead of <YOUR_MONGO_URI> and <YOUR_TEST_MONGO_URI> you should add the URI for your Mongo DataBase and for other Mongo DataBase (for testing), respectively, we use Mongo Atlas.

To run the server with nodemon:

```
cd server
npm run devServer
```

To run the server without nodemon:

```
cd server
npm run start
```

## Contributing

All contributions are welcome, but before you start working on a new feature or fixing a bug, you have to open a new Issue on our GitHub page and after your job is done, you open a new PR. Also, ensure to write a test for your feature in the `_tests` folder.

After that, run `npm run test` to test all the files and check if nothing is broken.

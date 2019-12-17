# ANONYMOUS POSTS

Anonymous Posts is a open-source project that is friendly for begginers. It´s built upon the MERN Stack and it´s currently under constructions. The basic server is already built and we´re working on the client side.

## Setup

Fork the repository and clone it in your machine. Cd into the repo and then run the following command to install all dependencies:

```
npm run installDep
```

Before you run the server you need to setup the database, in order to do so you have to create a folder named `config` and a file named `default.json`. In the `default.json` file you have to add:

```
{
	"mongoURI": <YOUR_MONGO_URI>
}

```

Instead of <YOUR_MONGO_URI> you should add the URI for your Mongo DataBase, we use Mongo Atlas.

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

All contributions are welcome, but before you start working on a new feature or fixing a bug, you have to open a new Issue on our GitHub page and after your job is done, you open a new PR.

## Codebase

We have 2 main folders, the `_server` and the `_client`, the names are pretty self-explanatory.

In `_server/models` we store the Schemas.

---

In `_server/routes/api/home` we store an welcome page to the api.

---

In `_server/routes/api` we store the routes and possible requests to create comments, create posts and clap (similar to like, but you can give as many as you want) them.

---

In `_server/server.js` we have the main server.

# 📚 Library

> A Baseplate example project using MongoDB

## Installation

1. Install [MongoDB](https://www.mongodb.com/) on your system.

1. Edit the `.env` file and set the following environment variables.

   - `MONGODB_NAME`: The database name (e.g. `baseplate_movies`)
   - `MONGODB_URI`: The database URI, including protocol, hostname and port (e.g. `mongodb://localhost:27017`)

1. Install the dependencies

   ```sh
   npm install
   ```

1. Run the bootstrap script to initialise the database collections

   ```sh
   npm run bootstrap
   ```

1. If you'd like some automatically-generated test data, run the data generator script

   ```sh
   npm run generate
   ```

1. Start the app

   ```sh
   npm run watch
   ```

1. Request an access token

   ```
   POST http://localhost:8123/base$users/token

   {
     "grant_type": "password",
     "username": "baseplate",
     "password": "baseplate"
   }
   ```

1. Access a model

   ```
   GET http://localhost:8123/books

   Authorization: Bearer <your-access-token>
   ```

If you use [Postman](https://www.postman.com/), make sure to checkout the [collection file](baseplate.postman_collection.json) for a quick way of interacting with various endpoints.

## Development

If you'd like to run the Baseplate core from source:

1. Clone the main repository and install it (see [the README](https://github.com/baseplate/baseplate) for more detailed instructions)

   ```sh
   # Cloning the repo
   git clone git@github.com:baseplate/baseplate.git baseplate
   cd baseplate

   # Installing the development dependencies
   npm install

   # Installing the dependencies of the various packages
   npm run bootstrap

   # Starting the application in watch mode
   npm run watch
   ```

1. Use [npm link](https://docs.npmjs.com/cli/link) to pull in the `@baseplate/*` modules from your local filesystem.

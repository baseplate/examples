# 📽 Movies

> A Baseplate example project using MongoDB

## Installing the core application

Baseplate is currently published as a set of [private GitHub packages](https://github.com/orgs/baseplate/packages). Follow the steps below to configure your npm client to use the GitHub registry and install the Baseplate core.

1. Generate a [personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) for your GitHub account.

1. Sign in to the GitHub registry. You'll be asked for your GitHub username, email address, and the personal access token generated in step 1.

   ```sh
   npm login --registry=https://npm.pkg.github.com
   ```

   > 👉 This will not sign you out of your regular npm account or affect it in any way.

1. Install the modules.

   ```sh
   npm install
   ```

## Setting up the database

1. Install [MongoDB](https://www.mongodb.com/) on your system.

1. Edit the `.env` file and set the following environment variables.

   - `MONGODB_NAME`: The database name (e.g. `baseplate_movies`)
   - `MONGODB_URI`: The database URI, including protocol, hostname and port (e.g. `mongodb://localhost:27017`)

1. Run the bootstrap script.

   ```sh
   npm run bootstrap
   ```

## Running the project

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

1. Create your first record

   ```
   POST http://localhost:8123/actors

   Authorization: Bearer <your-access-token>

   {
     "type": "actor",
     "data": {
       "attributes": {
         "name": "Marilyn Monroe",
         "birthName": "Norma Jeane Mortenson"
       }
     }
   }
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

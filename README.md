# 🏗 Baseplate Sample Project

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

### Using PostgreSQL

1. Run `psql` to open the PostgreSQL console and type the following.

   ```sql
   CREATE DATABASE baseplate_dev;
   \c baseplate_dev;
   CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
   ```

1. Edit the `.env` file and set the following environment variables.

   - `PGDATABASE`: The database name (e.g. `baseplate_dev`)
   - `PGHOST`: The database host (e.g. `localhost`)
   - `PGUSER`: The database username (e.g. `bp_dev`)
   - `PGPASSWORD`: The database password (e.g. `bp_dev`)

1. Run the bootstrap script.

   ```sh
   DATABASE=@baseplate/postgres npm run bootstrap
   ```

### Using MongoDB

1. Edit the `.env` file and set the following environment variables.

   - `MONGODB_DATABASE`: The database name (e.g. `bp_dev`)
   - `MONGODB_HOST`: The database host and port (e.g. `localhost:27017`)

1. Run the bootstrap script.

   ```sh
   DATABASE=@baseplate/mongodb npm run bootstrap
   ```

## Running the project

1. Start the app. You must set a `DATABASE` environment variable with the name of the database module of your choice (i.e. `@baseplate/mongodb` or `@baseplate/postgres`).

   ```sh
   DATABASE=@baseplate/postgres npm start
   ```

1. Request an access token

   ```
   POST http://localhost:8123/base_users/token

   {
     "grant_type": "password",
     "username": "baseplate",
     "password": "baseplate"
   }
   ```

1. Create your first record

   ```
   POST http://localhost:8123/authors

   Authorization: Bearer <your-access-token>

   {
     "type": "author",
     "data": {
       "attributes": {
         "firstName": "John",
         "lastName": "Doe"
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

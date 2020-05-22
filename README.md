# 🏗 Baseplate Sample Project

## Installing the core

> 👉 Until we have npm packages to use as dependencies, you must install the core application and make the sample project use it

1. Clone the core repository and install it (see [the README](https://github.com/baseplatejs/core) for more detailed instructions)

    ```sh
    # Cloning the repo
    git clone git@github.com:baseplatejs/core.git baseplate-core
    cd baseplate-core
    
    # Installing the development dependencies
    npm install
    
    # Installing the dependencies of the various packages
    lerna bootstrap
    
    # In case you don't have node_modules in your PATH, try this instead
    ./node_modules/.bin/lerna bootstrap
    ```

## Running the project

1. Clone this repository

    ```sh
    git clone git@github.com:baseplatejs/sample-project.git my-project
    cd my-project
    ```
    
1. Ensure that the paths to the `require()` calls in [`index.js`](https://github.com/baseplatejs/sample-project/blob/master/index.js#L1) and [`bootstrap.js`](https://github.com/baseplatejs/sample-project/blob/master/bootstrap.js#L1) map to the directory where you installed the core app    

1. Edit the `.env` file to change your database details

1. Setup the database and create your first user

    ```sh
    npm run bootstrap
    ```

1. Start the app

    ```sh
    npm start
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

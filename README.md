# 🏗 Baseplate Sample Project

## Instructions

1. Clone the [core repository](https://github.com/baseplatejs/core) and follow the installation instructions

1. Ensure that the paths to the `require()` calls in [`index.js`](https://github.com/baseplatejs/sample-project/blob/master/index.js#L1) and [`bootstrap.js`](https://github.com/baseplatejs/sample-project/blob/master/bootstrap.js#L1) map to the directory where you installed the core app

1. Edit the `.env` file to change your database details

1. Run `npm run bootstrap` to prepare the database and create your first user

1. Run the app with `npm start`

1. Request an access token

   ```
   POST http://localhost:8123/base_user/token

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
     "attributes": {
       "firstName": "John",
       "lastName": "Doe
     }
   }
   ```

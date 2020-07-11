if (!process.env.DATABASE) {
  throw new Error(
    "You must specify a database package using the DATABASE environment variable (e.g. `DATABASE=@baseplate/mongodb npm start`)"
  );
}

module.exports = require(process.env.DATABASE);

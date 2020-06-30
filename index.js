if (!process.env.DATABASE) {
  throw new Error(
    "You must specify a database package using the DATABASE environment variable (e.g. `DATABASE=@baseplate/mongodb npm start`)"
  );
}

const { default: baseplateServer } = require("@baseplate/server");
const baseplateApp = require(process.env.DATABASE);

baseplateServer
  .attach(baseplateApp)
  .start({
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  })
  .then(() => {
    console.log("🏗 🦄");
  });

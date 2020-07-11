const { default: baseplateServer } = require("@baseplate/server");
const baseplateApp = require("@baseplate/mongodb");

baseplateApp.load([
  require("./models/Author"),
  require("./models/Book"),
  require("./models/Library"),
]);

baseplateServer
  .attach(baseplateApp)
  .start({
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  })
  .then(() => {
    console.log("🏗 🦄");
  });

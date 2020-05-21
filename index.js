const baseplateServer = require("../baseplate-core/packages/server");

baseplateServer
  .start({
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  })
  .then(() => {
    console.log("🏗 🦄");
  });

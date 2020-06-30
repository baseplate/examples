const { default: baseplateServer } = require(process.env.PATH_SERVER ||
  "@baseplate/server");
const baseplateMongo = require(process.env.PATH_MONGODB ||
  "@baseplate/mongodb");
const baseplatePostgres = require(process.env.PATH_POSTGRES ||
  "@baseplate/postgres");

baseplateServer
  .attach(baseplateMongo)
  .start({
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  })
  .then(() => {
    console.log("🏗 🦄");
  });

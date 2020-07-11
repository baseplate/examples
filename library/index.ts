import * as baseplateApp from "@baseplate/postgres";
import server from "@baseplate/server";

baseplateApp.load([
  require("./models/Author"),
  require("./models/Book"),
  require("./models/Library"),
]);

server
  .attach(baseplateApp)
  .start({
    host: process.env.SERVER_HOST,
    port: Number.parseInt(process.env.SERVER_PORT),
  })
  .then(() => {
    console.log("🏗 🦄");
  });

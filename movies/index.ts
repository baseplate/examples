import server from "@baseplate/server";
import * as baseplateApp from "@baseplate/mongodb";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

import Actor from "./models/Actor";
import Director from "./models/Director";
import Movie from "./models/Movie";
import Producer from "./models/Producer";
import Stunt from "./models/Stunt";

baseplateApp.initialize([Actor, Director, Movie, Producer, Stunt], {
  database: {
    name: process.env.MONGODB_DATABASE,
    uri: process.env.MONGODB_URI,
  },
});

server(baseplateApp)
  .start({
    host: process.env.SERVER_HOST,
    port: Number.parseInt(process.env.SERVER_PORT),
  })
  .then(() => {
    console.log("🏗 🦄");
  });

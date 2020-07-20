import baseplateServer from "@baseplate/server";
import * as baseplateCore from "@baseplate/mongodb";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

import Actor from "./models/Actor";
import Director from "./models/Director";
import Movie from "./models/Movie";
import Producer from "./models/Producer";
import Stunt from "./models/Stunt";

baseplateCore.initialize({
  database: {
    name: process.env.MONGODB_DATABASE,
    uri: process.env.MONGODB_URI,
  },
  models: [Actor, Director, Movie, Producer, Stunt],
});

baseplateServer(baseplateCore)
  .start({
    host: process.env.SERVER_HOST,
    port: Number.parseInt(process.env.SERVER_PORT),
  })
  .then(() => {
    console.log("🏗 🦄");
  });

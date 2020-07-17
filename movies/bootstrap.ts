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

const USERNAME = "baseplate";
const PASSWORD = "baseplate";

(async () => {
  const { modelStore } = baseplateApp;
  const models = modelStore.getAll();
  const queue = models.map(async (Model) => {
    await Model.base$sync();

    console.log("✅ Created model:", Model.base$handle);
  });

  await Promise.all(queue);

  const User = modelStore.get("base$user");
  const user = new User({
    accessLevel: "admin",
    username: USERNAME,
    password: PASSWORD,
  });

  await user.save();

  console.log("✅ Created user:", USERNAME);

  process.exit(0);
})();
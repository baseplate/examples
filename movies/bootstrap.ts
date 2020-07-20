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

const USERNAME = "baseplate";
const PASSWORD = "baseplate";

(async () => {
  const { modelStore } = baseplateCore;
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

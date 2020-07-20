import * as baseplateCore from "@baseplate/postgres";

import Author from "./models/Author";
import Book from "./models/Book";
import Genre from "./models/Genre";

baseplateCore.initialize({ models: [Author, Book, Genre] });

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

import * as baseplateApp from "@baseplate/postgres";

baseplateApp.load([
  require("./models/Author"),
  require("./models/Book"),
  require("./models/Library"),
]);

const USERNAME = "baseplate";
const PASSWORD = "baseplate";

(async () => {
  const { modelStore } = baseplateApp;
  const models = modelStore.getAll();
  const queue = models.map(async (Model) => {
    await Model.base$onBootstrap();

    console.log("✅ Created table for model:", Model.base$handle);
  });

  await Promise.all(queue);

  const User = modelStore.get("base$user");
  const user = new User({
    accessLevel: "admin",
    username: USERNAME,
    password: PASSWORD,
  });

  await user.save();

  console.log("✅ Created user");

  process.exit(0);
})();

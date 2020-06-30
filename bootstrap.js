if (!process.env.DATABASE) {
  throw new Error(
    "You must specify a database package using the DATABASE environment variable (e.g. `DATABASE=@baseplate/mongodb npm start`)"
  );
}

const { default: baseplateServer } = require("@baseplate/server");
const baseplateApp = require(process.env.DATABASE);
const { modelStore } = require("@baseplate/core/");

const USERNAME = "baseplate";
const PASSWORD = "baseplate";

baseplateServer
  .attach(baseplateApp)
  .start({
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  })
  .then(async () => {
    const models = modelStore.getAll();
    const queue = models.map(async (Model) => {
      await Model.base$dbSetup();

      console.log("✅ Created table for model:", Model.handle);
    });

    await Promise.all(queue);

    const User = modelStore.get("base_user");
    const user = new User({
      accessLevel: "admin",
      username: USERNAME,
      password: PASSWORD,
    });

    await user.save();

    console.log("✅ Created user");

    process.exit(0);
  });

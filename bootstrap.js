const baseplateServer = require("../baseplate-core/packages/server");
const {
  createDatastore,
  modelStore,
} = require("../baseplate-core/packages/core/");

const USERNAME = "baseplate";
const PASSWORD = "baseplate";

baseplateServer
  .start({
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  })
  .then(async () => {
    const models = modelStore.getAll();
    const queue = models.map(async (Model) => {
      await Model.$__dbSetup();

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

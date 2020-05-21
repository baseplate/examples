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
    const datastore = createDatastore();

    await datastore.setup({ modelStore });

    console.log("✅ Created tables");

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

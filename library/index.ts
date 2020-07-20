import * as baseplateCore from "@baseplate/postgres";
import baseplateServer from "@baseplate/server";

import Author from "./models/Author";
import Book from "./models/Book";
import Genre from "./models/Genre";

baseplateCore.initialize({ models: [Author, Book, Genre] });

baseplateServer(baseplateCore)
  .start({
    host: process.env.SERVER_HOST,
    port: Number.parseInt(process.env.SERVER_PORT),
  })
  .then(() => {
    console.log("🏗 🦄");
  });

import * as baseplateApp from "@baseplate/postgres";
import server from "@baseplate/server";

import Author from "./models/Author";
import Book from "./models/Book";
import Genre from "./models/Genre";

baseplateApp.initialize([Author, Book, Genre]);

server(baseplateApp)
  .start({
    host: process.env.SERVER_HOST,
    port: Number.parseInt(process.env.SERVER_PORT),
  })
  .then(() => {
    console.log("🏗 🦄");
  });

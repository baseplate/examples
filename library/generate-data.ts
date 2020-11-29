import * as baseplateCore from '@baseplate/mongodb'
import faker from 'faker'

import Author from './models/Author'
import Book from './models/Book'
import Genre from './models/Genre'

baseplateCore.initialize({
  database: {
    name: 'baseplate_library',
    uri: 'mongodb://localhost:27017',
  },
  models: [Author, Book, Genre],
})

;(async () => {
  const {modelStore} = baseplateCore

  // Creating 20 genres.
  const GenreModel = modelStore.get('genre')
  const genres = await Promise.all(
    Array.from(new Array(20).keys()).map(() =>
      GenreModel.create(
        {
          name: faker.commerce.department(),
        },
        {authenticate: false}
      )
    )
  )

  // Creating 30 authors, picking a favourite genre at random.
  const AuthorModel = modelStore.get('author')
  const authors = await Promise.all(
    Array.from(new Array(30).keys()).map(() =>
      AuthorModel.create(
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          favouriteGenre: genres[Math.floor(Math.random() * genres.length)],
        },
        {authenticate: false}
      )
    )
  )

  // Creating 50 books, picking an author and genres at random.
  const BookModel = modelStore.get('book')
  const books = await Promise.all(
    Array.from(new Array(50).keys()).map(() =>
      BookModel.create(
        {
          title: faker.company.catchPhrase(),
          isbn: faker.finance.iban(),
          author: authors[Math.floor(Math.random() * authors.length)],
          // genre: [
          //   genres[Math.floor(Math.random() * genres.length)],
          //   genres[Math.floor(Math.random() * genres.length)],
          //   genres[Math.floor(Math.random() * genres.length)],
          // ],
        },
        {authenticate: false}
      )
    )
  )

  console.log(
    `✅ Created ${genres.length + authors.length + books.length} entries`
  )

  process.exit(0)
})()

// ----

// import Generator from "@baseplate/data-generator";

// const generator = new Generator({
//   url: process.argv[2],
//   username: "baseplate",
//   password: "baseplate",
// });

// (async () => {
//   await generator.insert({
//     attributes: {
//       name: {
//         format: "{{name.jobTitle}}",
//       },
//     },
//     count: 3,
//     modelName: "genres",
//     type: "genre",
//   });

//   await generator.insert({
//     attributes: {
//       firstName: {
//         format: "{{name.firstName}}",
//       },
//       lastName: {
//         format: "{{name.lastName}}",
//       },
//     },
//     relationships: {
//       favouriteGenre: {
//         type: "genre",
//       },
//     },
//     count: 3,
//     modelName: "authors",
//     type: "author",
//   });

//   await generator.insert({
//     attributes: {
//       title: {
//         format: "{{company.catchPhrase}}",
//       },
//       isbn: {
//         format: "{{finance.iban}}",
//       },
//     },
//     relationships: {
//       author: {
//         type: "author",
//       },
//     },
//     count: 30,
//     modelName: "books",
//     type: "book",
//   });
// })();

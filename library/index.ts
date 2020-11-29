import * as baseplateCore from '@baseplate/mongodb'
import baseplateServer from '@baseplate/server'

import Author from './models/Author'
import Book from './models/Book'
import Genre from './models/Genre'

import * as getBookRatings from './endpoints/getBookRatings'

baseplateCore.initialize({
  database: {
    name: 'baseplate_library',
    uri: 'mongodb://localhost:27017',
  },
  endpoints: [getBookRatings],
  models: [Author, Book, Genre],
})

baseplateServer(baseplateCore)
  .start({
    host: process.env.SERVER_HOST,
    port: Number.parseInt(process.env.SERVER_PORT),
  })
  .then(() => {
    console.log('🏗 🦄')
  })

export default {
  name: 'genre',
  fields: {
    name: {
      type: String,
      required: true,
    },

    test: [String],

    testObject: {
      child1: {
        type: Number,
        min: 50,
      },
    },

    // A model can reference itself.
    parentGenre: 'genre',
  },
  virtuals: {
    test2: {
      get() {
        return 'oh, hello there!'
      },
    },
  },
}

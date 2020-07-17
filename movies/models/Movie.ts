export default {
  // This property is required when defining models using the object syntax.
  name: "movie",
  fields: {
    title: {
      type: String,
      required: true,
    },
    year: Number,
    score: Number,
    director: "Director",
    cast: ["Actor"],
    crew: ["Producer", "Stunt"],
  },
};

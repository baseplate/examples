export default {
  name: "stunt",
  fields: {
    name: {
      type: String,
      required: true,
    },
    address: {
      street: {
        line1: String,
        line2: String,
      },
      postcode: String,
    },
  },
};

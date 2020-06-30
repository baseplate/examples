module.exports = {
  label: "Authors",
  fields: {
    firstName: {
      type: String,
      label: "First name",
      required: true,
      minLength: 2,
      maxLength: 15,
    },
    lastName: { type: String, label: "Last name" },
    address: {
      label: "Address",
      type: {
        street: {
          type: String,
        },
        city: String,
      },
    },
  },
};

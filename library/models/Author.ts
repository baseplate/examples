import { BaseModel } from "@baseplate/mongodb";

export default class Author extends BaseModel {
  static base$fields = {
    // Some constraints, like `required`, work with any field, whereas others
    // vary with the type of the field. For example, String fields have things
    // like `minLength` and `maxLength`.
    firstName: {
      type: String,
      label: "First name",
      required: true,
      minLength: 1,
      maxLength: 85,
      search: {
        weight: 5,
      },
    },

    favouriteGenre: "Genre",

    // Same as {type: String}.
    lastName: String,
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    // You can have nested fields.
    address: {
      // ... as deeply as you want.
      streetAddress: {
        line1: {
          type: String,
          search: {
            weight: 2,
          },
        },
        line2: String,
        line3: {
          part1: String,
          part2: Number,
        },
      },
      streetAddress2: {
        type: String,
      },
      postcode: {
        type: String,

        // You can specify your own validation function.
        validate: (input: string) => input.startsWith("XYZ"),

        // And configure the error message that is shown when it fails.
        errorMessage: 'Postcode must begin with "XYZ"',
      },
      city: String,
      state: String,
      country: String,
    },
  };

  //static base$index = [{ fields: { city: -1, state: 1 }, sparse: true }];
}

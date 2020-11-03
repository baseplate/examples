import { BaseModel } from "@baseplate/mongodb";

export default class Actor extends BaseModel {
  static base$fields = {
    // Some constraints, like `required`, work with any field, whereas others
    // vary with the type of the field. For example, String fields have things
    // like `minLength` and `maxLength`.
    name: {
      type: String,
      label: "Name",
      required: true,
      unique: true,
      minLength: "as",
      maxLength: 85,
      validate: (input: string) => input.startsWith("hello"),
    },

    // Same as {type: String}.
    birthName: String,
  };
}

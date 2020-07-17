import { BaseModel } from "@baseplate/mongodb";

export default class Actor extends BaseModel {
  static fields = {
    // Some constraints, like `required`, work with any field, whereas others
    // vary with the type of the field. For example, String fields have things
    // like `minLength` and `maxLength`.
    name: {
      type: String,
      label: "Name",
      required: true,
      unique: true,
      minLength: 1,
      maxLength: 85,
    },

    // Same as {type: String}.
    birthName: String,
  };
}

import { Schema } from "mongoose";
import favoriteSchema from "./favoriteSchema";

const listFavsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  name: {
    type: String,
    required: true,
  },
  favs: [favoriteSchema],
});

export default listFavsSchema;

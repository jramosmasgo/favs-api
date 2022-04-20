import { Schema } from "mongoose";

const favoriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  title: {
    type: String,
    required: true,
  },
  items: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

export default favoriteSchema;

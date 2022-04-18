import { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name es required"],
  },
  email: {
    type: String,
    required: [true, "email es required"],
    unique: [true, "email not valid"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

export default userSchema;

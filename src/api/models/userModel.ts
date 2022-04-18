import { model } from "mongoose";
import userSchema from "../schemas/userSchema";
import { User } from "../interfaces/user";

const UserModel = model<User>("Users", userSchema);

export default UserModel;

import UserModel from "../../models/userModel";
import { ApplicationError } from "../../interfaces/error";
import { User } from "../../interfaces/user";

const getUserByFieldData = async (field: Object): Promise<User | undefined> => {
  try {
    const user = await UserModel.findOne({ ...field });
    if (!user) throw new Error("User not found");
    return user;
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default getUserByFieldData;

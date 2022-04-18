import { User } from "../../interfaces/user";
import UserModel from "../../models/userModel";
import { ApplicationError } from "../../interfaces/error";

const createUserData = async (userData: User): Promise<User> => {
  try {
    return await UserModel.create(userData);
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default createUserData;

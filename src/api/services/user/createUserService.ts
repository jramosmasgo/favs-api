import createUserData from "../../data/user/createUserData";
import { ApplicationError } from "../../interfaces/error";
import { User } from "../../interfaces/user";
import { encrypt } from "../../utils/encrypt";

const createUserService = async (user: User) => {
  try {
    user.password = await encrypt(user.password);
    return await createUserData(user);
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default createUserService;

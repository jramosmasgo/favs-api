import getUserByFieldData from "../../data/user/getUserByFieldData";
import { ApplicationError } from "../../interfaces/error";
import { validate } from "../../utils/encrypt";
import { createToken } from "../../utils/token";

const loginUserService = async (
  email: string,
  password: string
): Promise<string> => {
  try {
    const user = await getUserByFieldData({ email });
    if (!user) throw new Error("User not Found");

    const validatePassword = await validate(password, user.password);

    if (!validatePassword) throw new Error("User nor found");

    return createToken({ idUser: user.id });
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default loginUserService;

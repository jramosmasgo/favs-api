import createUserService from "../../src/api/services/user/createUserService";
import { createToken } from "../../src/api/utils/token";
import { mockUser } from "../data/user/userMocks";

export const url_fav = "/api/favs";
export const url_auth = "/api/fav";

export const createUserAndGenerateToken = async () => {
  const { id } = await createUserService(mockUser);
  return createToken({ idUser: id });
};

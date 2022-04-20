import createFavoriteData from "../../data/favorites/createFavoriteData";
import { ApplicationError } from "../../interfaces/error";
import { Favorite } from "../../interfaces/favorite";

const createFavoriteService = async (data: Favorite): Promise<Favorite> => {
  try {
    return await createFavoriteData(data);
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default createFavoriteService;

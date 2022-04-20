import getFavoriteByFieldData from "../../data/favorites/getFavoriteByFieldData";
import { ApplicationError } from "../../interfaces/error";
import { Favorite } from "../../interfaces/favorite";

const getFavoriteByFieldService = async (filter: Object): Promise<Favorite> => {
  try {
    const favoriteFound = await getFavoriteByFieldData(filter);

    if (!favoriteFound) throw new Error("Favorite not found");

    return favoriteFound;
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default getFavoriteByFieldService;

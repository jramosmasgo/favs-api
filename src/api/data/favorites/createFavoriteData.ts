import { ApplicationError } from "../../interfaces/error";
import { Favorite } from "../../interfaces/favorite";
import favoriteModel from "../../models/favoriteModel";

const createFavoriteData = async (favorite: Favorite): Promise<Favorite> => {
  try {
    return favoriteModel.create(favorite);
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default createFavoriteData;

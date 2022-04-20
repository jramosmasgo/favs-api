import favoriteModel from "../../models/favoriteModel";
import { Favorite } from "../../interfaces/favorite";
import { ApplicationError } from "../../interfaces/error";

const getFavoriteByFieldData = async (
  field: Object
): Promise<Favorite | null> => {
  try {
    return await favoriteModel.findOne({ ...field });
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default getFavoriteByFieldData;

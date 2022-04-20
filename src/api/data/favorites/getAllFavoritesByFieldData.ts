import { ApplicationError } from "../../interfaces/error";
import { Favorite } from "../../interfaces/favorite";
import favoriteModel from "../../models/favoriteModel";

const getAllFavoritesByFieldData = async (
  field: Object
): Promise<Favorite[]> => {
  try {
    return favoriteModel.find({ ...field });
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default getAllFavoritesByFieldData;

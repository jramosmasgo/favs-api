import { ApplicationError } from "../../interfaces/error";
import favoriteModel from "../../models/favoriteModel";
import getFavoriteByFieldData from "./getFavoriteByFieldData";

const deleteFavoriteByFieldData = async (field: Object): Promise<boolean> => {
  try {
    const favoritefound = await getFavoriteByFieldData({ ...field });

    if (!favoritefound) throw new Error("Favorite not Found");

    await favoriteModel.deleteOne({ ...field });
    return true;
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default deleteFavoriteByFieldData;

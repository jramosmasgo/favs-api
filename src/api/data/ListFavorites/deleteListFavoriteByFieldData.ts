import { ApplicationError } from "../../interfaces/error";
import ListFavsModel from "../../models/listFavsModel";
import getListFavoriteByFieldData from "./getListFavoriteByFieldData";

const deleteListFavoriteByFieldData = async (
  field: Object
): Promise<boolean> => {
  try {
    const favoriteListfound = await getListFavoriteByFieldData({ ...field });
    if (!favoriteListfound) throw new Error("List Favorite not Found");
    await ListFavsModel.deleteOne({ ...field });
    return true;
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default deleteListFavoriteByFieldData;

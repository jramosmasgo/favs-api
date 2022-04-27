import { ApplicationError } from "../../interfaces/error";
import { ListFav } from "../../interfaces/listFav";
import ListFavsModel from "../../models/listFavsModel";

const getListFavoriteByFieldData = async (
  field: Object
): Promise<ListFav | null> => {
  try {
    return await ListFavsModel.findOne({ ...field });
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default getListFavoriteByFieldData;

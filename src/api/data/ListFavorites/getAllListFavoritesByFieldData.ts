import { ApplicationError } from "../../interfaces/error";
import { ListFav } from "../../interfaces/listFav";
import ListFavsModel from "../../models/listFavsModel";

const getAllListFavoritesByFieldData = async (
  field: Object
): Promise<ListFav[]> => {
  try {
    return ListFavsModel.find({ ...field });
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default getAllListFavoritesByFieldData;

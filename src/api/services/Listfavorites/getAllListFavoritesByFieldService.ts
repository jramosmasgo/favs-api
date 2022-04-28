import getAllListFavoritesByFieldData from "../../data/ListFavorites/getAllListFavoritesByFieldData";
import { ApplicationError } from "../../interfaces/error";
import { ListFav } from "../../interfaces/listFav";

const getAllListFavoritesByFielService = async (
  filter: Object
): Promise<ListFav[]> => {
  try {
    const results = await getAllListFavoritesByFieldData(filter);
    return results;
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default getAllListFavoritesByFielService;

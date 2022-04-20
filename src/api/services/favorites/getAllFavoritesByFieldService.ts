import getAllFavoritesByFieldData from "../../data/favorites/getAllFavoritesByFieldData";
import { ApplicationError } from "../../interfaces/error";
import { Favorite } from "../../interfaces/favorite";

const getAllFavoritesByFielService = async (
  filter: Object
): Promise<Favorite[]> => {
  try {
    const results = await getAllFavoritesByFieldData(filter);
    return results;
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default getAllFavoritesByFielService;

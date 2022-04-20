import deleteFavoriteByFieldData from "../../data/favorites/deleteFavoriteByFieldData";
import { ApplicationError } from "../../interfaces/error";

const deleteFavoriteByFieldService = async (
  filter: Object
): Promise<boolean> => {
  try {
    const result = await deleteFavoriteByFieldData(filter);

    if (!result) throw new Error("Error on delete favorite");

    return result;
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default deleteFavoriteByFieldService;

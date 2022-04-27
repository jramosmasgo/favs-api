import deleteListFavoriteByFieldData from "../../data/ListFavorites/deleteListFavoriteByFieldData";
import { ApplicationError } from "../../interfaces/error";

const deleteListFavoriteByFieldService = async (
  filter: Object
): Promise<boolean> => {
  try {
    const result = await deleteListFavoriteByFieldData(filter);

    if (!result) throw new Error("Error on delete favorite");

    return result;
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default deleteListFavoriteByFieldService;

import getListFavoriteByFieldData from "../../data/ListFavorites/getListFavoriteByFieldData";
import { ApplicationError } from "../../interfaces/error";
import { ListFav } from "../../interfaces/listFav";

const getListFavoriteByFieldService = async (
  filter: Object
): Promise<ListFav> => {
  try {
    const favoriteFound = await getListFavoriteByFieldData(filter);

    if (!favoriteFound) throw new Error("List Favroites not found");

    return favoriteFound;
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default getListFavoriteByFieldService;

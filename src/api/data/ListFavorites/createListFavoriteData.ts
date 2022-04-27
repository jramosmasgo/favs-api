import { ApplicationError } from "../../interfaces/error";
import { ListFav } from "../../interfaces/listFav";
import ListFavsModel from "../../models/listFavsModel";

const createListFavoriteData = async (
  listfavorite: ListFav
): Promise<ListFav> => {
  try {
    return await ListFavsModel.create(listfavorite);
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default createListFavoriteData;

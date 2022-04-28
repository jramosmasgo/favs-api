import createListFavoriteData from "../../data/ListFavorites/createListFavoriteData";
import { ApplicationError } from "../../interfaces/error";
import { ListFav } from "../../interfaces/listFav";

const createListFavoriteService = async (data: ListFav): Promise<ListFav> => {
  try {
    return await createListFavoriteData(data);
  } catch (error: any) {
    throw new ApplicationError(400, error.message);
  }
};

export default createListFavoriteService;

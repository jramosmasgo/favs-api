import { Response, Request, NextFunction } from "express";
import ResponseApi from "../../core/responseApi";
import { ListFav } from "../../interfaces/listFav";
import getAllListFavoritesByFielService from "../../services/Listfavorites/getAllListFavoritesByFieldService";

const getAllFavoritesByUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userID } = req.headers;
    const result = await getAllListFavoritesByFielService({
      user: userID as string,
    });
    new ResponseApi<ListFav[]>({
      message: "List of Favorites",
      data: result,
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getAllFavoritesByUserController;

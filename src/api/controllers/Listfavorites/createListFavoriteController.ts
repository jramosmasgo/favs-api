import { Response, Request, NextFunction } from "express";
import ResponseApi from "../../core/responseApi";
import createListFavoriteService from "../../services/Listfavorites/createListFavoriteService";
import { ListFav } from "../../interfaces/listFav";

const createFavoriteController = async (
  req: Request<{}, {}, ListFav>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userID } = req.headers;
    req.body.user = userID as string;
    const data = await createListFavoriteService(req.body);
    new ResponseApi<ListFav>({
      data: data,
      message: "List Favorite Created",
    }).sendSuccess(res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default createFavoriteController;

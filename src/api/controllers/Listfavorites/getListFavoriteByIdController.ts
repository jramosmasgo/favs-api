import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseApi";
import { ListFav } from "../../interfaces/listFav";
import getListFavoriteByFieldService from "../../services/Listfavorites/getListFavoriteByFieldService";

const getFavoriteByIdController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getListFavoriteByFieldService({ _id: req.params.id });
    new ResponseApi<ListFav>({
      data: result,
      message: "Favorite Found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getFavoriteByIdController;

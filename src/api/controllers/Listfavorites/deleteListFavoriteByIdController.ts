import { Response, Request, NextFunction } from "express";
import ResponseApi from "../../core/responseApi";
import deleteListFavoriteByFieldService from "../../services/Listfavorites/deleteListFavoriteByFieldService";

const deleteFavoriteByIdController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await deleteListFavoriteByFieldService({
      _id: req.params.id,
    });
    new ResponseApi<boolean>({
      message: "List Favorited Removed",
      data: result,
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default deleteFavoriteByIdController;

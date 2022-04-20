import { Response, Request, NextFunction } from "express";
import ResponseApi from "../../core/responseApi";
import deleteFavoriteByFieldService from "../../services/favorites/deletefavoriteByFieldService";

const deleteFavoriteByIdController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await deleteFavoriteByFieldService({ _id: req.params.id });
    new ResponseApi<boolean>({
      message: "Favorited Removed",
      data: result,
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default deleteFavoriteByIdController;

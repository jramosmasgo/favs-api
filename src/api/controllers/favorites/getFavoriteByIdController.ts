import { Request, Response, NextFunction } from "express";
import ResponseApi from "../../core/responseApi";
import { Favorite } from "../../interfaces/favorite";
import getFavoriteByFieldService from "../../services/favorites/getFavoriteByFieldService";

const getFavoriteByIdController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getFavoriteByFieldService({ _id: req.params.id });
    new ResponseApi<Favorite>({
      data: result,
      message: "Favorite Found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getFavoriteByIdController;

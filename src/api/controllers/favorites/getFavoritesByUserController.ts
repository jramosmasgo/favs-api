import { Response, Request, NextFunction } from "express";
import getAllFavoritesByFielService from "../../services/favorites/getAllFavoritesByFieldService";
import ResponseApi from "../../core/responseApi";
import { Favorite } from "../../interfaces/favorite";

const getAllFavoritesByUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userID } = req.headers;
    const result = await getAllFavoritesByFielService({
      user: userID as string,
    });
    new ResponseApi<Favorite[]>({
      message: "List of Favorites",
      data: result,
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default getAllFavoritesByUserController;

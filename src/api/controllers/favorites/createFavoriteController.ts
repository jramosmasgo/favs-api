import { Response, Request, NextFunction } from "express";
import ResponseApi from "../../core/responseApi";
import { Types } from "mongoose";
import { Favorite } from "../../interfaces/favorite";
import createFavoriteService from "../../services/favorites/createFavoriteService";

const createFavoriteController = async (
  req: Request<{}, {}, Favorite>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userID } = req.headers;
    req.body.user = userID as string;
    const data = await createFavoriteService(req.body);
    new ResponseApi<Favorite>({
      data: data,
      message: "Favorite Created",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default createFavoriteController;

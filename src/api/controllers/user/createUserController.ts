import { Response, Request, NextFunction } from "express";
import createUserService from "../../services/user/createUserService";
import { ApplicationError } from "../../interfaces/error";
import { User } from "../../interfaces/user";
import ResponseApi from "../../core/responseApi";

const createUserController = async (
  req: Request<{}, {}, User>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createUserService(req.body);
    new ResponseApi<User>({
      data: result,
      message: "Register success",
    }).sendSuccess(res);
  } catch (error: any) {
    next(new ApplicationError(400, error.message, "error Service"));
  }
};

export default createUserController;

import { Request, Response, NextFunction } from "express";
import loginUserService from "../../services/user/loginUserService";
import responseApi from "../../core/responseApi";

const loginUserController = async (
  req: Request<{}, {}, { email: string; password: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await loginUserService(req.body.email, req.body.password);
    new responseApi<Object>({
      data: { token: token },
      message: "Login success",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};

export default loginUserController;

import { Response, Request, NextFunction } from "express";
import { ApplicationError } from "../interfaces/error";
import { validateToken } from "../utils/token";

const tokenValidation = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return next(
        new ApplicationError(401, "No token provided", "Token Error")
      );
    }

    const { idUser } = validateToken(authorization.replace("Bearer ", ""));

    if (!idUser) {
      console.log(idUser);
      return next(new ApplicationError(401, "Invalid Tokenn", "Token Error"));
    }

    req.headers.userID = idUser;
    next();
  } catch (error: any) {
    if (error.message == "jwt expired")
      return next(new ApplicationError(401, error.message, "Token Error"));
    next(error);
  }
};

export default tokenValidation;

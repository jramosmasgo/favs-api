import { Response, Request, NextFunction } from "express";
import { ObjectSchema } from "yup";
import { ApplicationError } from "../interfaces/error";

const contentValidator =
  (schmea: ObjectSchema<any>) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schmea.validate(req.body);
      next();
    } catch (error: any) {
      next(
        new ApplicationError(400, error.message, "validation esquema Error")
      );
    }
  };

export default contentValidator;

import { Router } from "express";
import createUserController from "../controllers/user/createUserController";
import loginUserController from "../controllers/user/loginUserController";
import contentValidator from "../middlewares/contentValidator";
import createUserValidator from "../validators/user/createUserValidator";
import loginUserValidator from "../validators/user/loginUserValidator";

const router = Router();

router.post(
  "/register",
  contentValidator(createUserValidator),
  createUserController
);

router.post(
  "/login",
  contentValidator(loginUserValidator),
  loginUserController
);

export default router;

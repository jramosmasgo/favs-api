import { Router } from "express";
import createUserController from "../controllers/user/createUserController";
import loginUserController from "../controllers/user/loginUserController";
import contentValidator from "../middlewares/contentValidator";
import createUserValidator from "../validators/user/createUserValidator";
import loginUserValidator from "../validators/user/loginUserValidator";

const router = Router();

/**
 Spec for the /auth
  * @openapi
  * /auth/local/register:
  *   post:
  *     tags:
  *       - Users
  *     description: "Allows registration of new users"
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: "#/components/schemas/register"
  *     responses:
  *       200:
  *         description: OK
  *         content:
  *           application/json:
  *             schema:
  *               $ref: "#/components/schemas/response"
 */
router.post(
  "/register",
  contentValidator(createUserValidator),
  createUserController
);

/**
 Spec for the /auth
  * @openapi
  * /auth/local/login:
  *   post:
  *     tags:
  *       - Users
  *     description: "Allows login of users and  get token authorization"
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: "#/components/schemas/login"
  *     responses:
  *       200:
  *         description: OK
  *         content:
  *           application/json:
  *             schema:
  *               $ref: "#/components/schemas/response"
 */
router.post(
  "/login",
  contentValidator(loginUserValidator),
  loginUserController
);

export default router;

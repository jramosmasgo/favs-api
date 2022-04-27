import { Router } from "express";
import createFavoriteController from "../controllers/Listfavorites/createListFavoriteController";
import deleteFavoriteByIdController from "../controllers/Listfavorites/deleteListFavoriteByIdController";
import getFavoriteByIdController from "../controllers/Listfavorites/getListFavoriteByIdController";
import getAllFavoritesByUserController from "../controllers/Listfavorites/getListFavoritesByUserController";

import contentValidator from "../middlewares/contentValidator";
import tokenValidation from "../middlewares/tokenValidator";
import createFavoriteValidator from "../validators/favorites/createFavoriteValidator";
const router = Router();

/**
 Spec for the /auth
  * @openapi
  * /api/favs:
  *   post:
  *     security:
  *       - bearerAuth: []
  *     tags:
  *       - Favorites
  *     description: "Allows creation of new list of favorites"
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: "#/components/schemas/listFavorite"
  *     responses:
  *       200:
  *         description: OK
  *         content:
  *           application/json:
  *             schema:
  *               $ref: "#/components/schemas/response"
 */
router.post(
  "/favs",
  contentValidator(createFavoriteValidator),
  tokenValidation,
  createFavoriteController
);

/**
 Spec for the /auth
  * @openapi
  * /api/favs:
  *   get:
  *     security:
  *       - bearerAuth: []
  *     tags:
  *       - Favorites
  *     description: "Get all favorites list of user"
  *     responses:
  *       200:
  *         description: OK
  *         content:
  *           application/json:
  *             schema:
  *               $ref: "#/components/schemas/response"
 */
router.get("/favs", tokenValidation, getAllFavoritesByUserController);

/**
 Spec for the /auth
  * @openapi
  * /api/favs/{id}:
  *   get:
  *     security:
  *       - bearerAuth: []
  *     tags:
  *       - Favorites
  *     description: "Get specific favorites list by id"
  *     parameters:
  *       - in: "path"
  *         name: "id"        
  *         description: "Id List"
  *         required: true
  *         type: "string"
  *     responses:
  *       200:
  *         description: OK
  *         content:
  *           application/json:
  *             schema:
  *               $ref: "#/components/schemas/response"
 */
router.get("/favs/:id", tokenValidation, getFavoriteByIdController);

/**
 Spec for the /auth
  * @openapi
  * /api/favs/{id}:
  *   delete:
  *     security:
  *       - bearerAuth: []
  *     tags:
  *       - Favorites
  *     description: "Get specific favorites list by id"
  *     parameters:
  *       - in: "path"
  *         name: "id"        
  *         description: "Id List"
  *         required: true
  *         type: "string"
  *     responses:
  *       200:
  *         description: OK
  *         content:
  *           application/json:
  *             schema:
  *               $ref: "#/components/schemas/response"
 */
router.delete("/favs/:id", tokenValidation, deleteFavoriteByIdController);

export default router;

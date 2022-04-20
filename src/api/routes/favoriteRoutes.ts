import { Router } from "express";
import createFavoriteController from "../controllers/favorites/createFavoriteController";
import deleteFavoriteByIdController from "../controllers/favorites/deleteFavoriteByIdController";
import getFavoriteByIdController from "../controllers/favorites/getFavoriteByIdController";
import getAllFavoritesByUserController from "../controllers/favorites/getFavoritesByUserController";
import contentValidator from "../middlewares/contentValidator";
import tokenValidation from "../middlewares/tokenValidator";
import createFavoriteValidator from "../validators/favorites/createFavoriteValidator";
const router = Router();

router.post(
  "/favs",
  contentValidator(createFavoriteValidator),
  tokenValidation,
  createFavoriteController
);

router.get("/favs", tokenValidation, getAllFavoritesByUserController);
router.get("/favs/:id", tokenValidation, getFavoriteByIdController);
router.delete("/favs/:id", tokenValidation, deleteFavoriteByIdController);

export default router;

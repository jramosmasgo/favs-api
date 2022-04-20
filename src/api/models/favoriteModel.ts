import { model } from "mongoose";
import favoriteSchema from "../schemas/favoriteSchema";
import { Favorite } from "../interfaces/favorite";

const favoriteModel = model<Favorite>("Favorites", favoriteSchema);

export default favoriteModel;

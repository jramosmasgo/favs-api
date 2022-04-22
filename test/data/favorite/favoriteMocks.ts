import { Favorite } from "../../../src/api/interfaces/favorite";
import favoriteModel from "../../../src/api/models/favoriteModel";

export const favoriteModelMock = favoriteModel as jest.MockedClass<
  typeof favoriteModel
>;

export const mockfavorite: Favorite = {
  title: "mi lista de musica favorita",
  url: "https://www.milinkdeprueba.xyz",
  items: ["Roxete", "Iron Maiden", "Sonata Artica"],
  user: "625dcf874c07e9fb1f302457",
  description: "lista creada para guardar mis bandas favoritas",
};

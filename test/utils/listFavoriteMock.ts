import { ListFav } from "../../src/api/interfaces/listFav";
import ListFavsModel from "../../src/api/models/listFavsModel";

export const favoriteListModelMock = ListFavsModel as jest.MockedClass<
  typeof ListFavsModel
>;

export const mockListfavorite: ListFav = {
  name: "Lista prueba",
  user: "625dcf874c07e9fb1f302457",
  favs: [
    {
      title: "Titulo 1",
      description: "description 1",
      link: "https://www.google.com",
    },
    {
      title: "Titulo 2",
      description: "description 2",
      link: "https://www.facebook.com",
    },
  ],
};

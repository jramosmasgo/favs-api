import deleteListFavoriteByFieldData from "../../../src/api/data/ListFavorites/deleteListFavoriteByFieldData";
import * as getListFavoriteByFieldData from "../../../src/api/data/ListFavorites/getListFavoriteByFieldData";
import {
  favoriteListModelMock,
  mockListfavorite,
} from "../../utils/listFavoriteMock";

describe("delete favorite by Field in data layer", () => {
  it("return error when user was not found", async () => {
    const mockGetFavorite = jest.spyOn(getListFavoriteByFieldData, "default");
    mockGetFavorite.mockImplementation(() => Promise.resolve(null));

    try {
      await deleteListFavoriteByFieldData({ id: "123" });
    } catch (error: any) {
      expect(error.message).toBe("List Favorite not Found");
    }
  });

  it("return true when favorite was found", async () => {
    const mockGetFavorite = jest.spyOn(getListFavoriteByFieldData, "default");
    mockGetFavorite.mockImplementation(() => Promise.resolve(mockListfavorite));
    favoriteListModelMock.deleteOne = jest.fn();

    const result = await deleteListFavoriteByFieldData({ id: "123 " });
    expect(result).toBe(true);
  });
});

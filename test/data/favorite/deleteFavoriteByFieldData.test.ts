import deleteFavoriteByFieldData from "../../../src/api/data/favorites/deleteFavoriteByFieldData";
import * as getFavoriteByFieldData from "../../../src/api/data/favorites/getFavoriteByFieldData";
import { favoriteModelMock, mockfavorite } from "./favoriteMocks";

describe("delete favorite by Field in data layer", () => {
  it("return error when user was not found", async () => {
    const mockGetFavorite = jest.spyOn(getFavoriteByFieldData, "default");
    mockGetFavorite.mockImplementation(() => Promise.resolve(null));

    try {
      await deleteFavoriteByFieldData({ id: "123" });
    } catch (error: any) {
      expect(error.message).toBe("Favorite not Found");
    }
  });

  it("return true when favorite was found", async () => {
    const mockGetFavorite = jest.spyOn(getFavoriteByFieldData, "default");
    mockGetFavorite.mockImplementation(() => Promise.resolve(mockfavorite));
    favoriteModelMock.deleteOne = jest.fn();
    const result = await deleteFavoriteByFieldData({ id: "123" });
    expect(result).toBe(true);
  });
});

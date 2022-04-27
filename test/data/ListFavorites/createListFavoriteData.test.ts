import createListFavoriteData from "../../../src/api/data/ListFavorites/createListFavoriteData";
import {
  favoriteListModelMock,
  mockListfavorite,
} from "../../utils/listFavoriteMock";

describe("create favorite in data layer", () => {
  it("should return error when create error", async () => {
    favoriteListModelMock.create = jest.fn().mockImplementation(() => {
      throw new Error("error on call function create");
    });

    try {
      await createListFavoriteData(mockListfavorite);
    } catch (error: any) {
      expect(error.message).toBe("error on call function create");
    }
  });

  it("should return an favorite on called function", async () => {
    favoriteListModelMock.create = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockListfavorite));
    const user = await createListFavoriteData(mockListfavorite);
    expect(user).not.toEqual(undefined);
    expect(favoriteListModelMock.create).toHaveBeenCalledTimes(1);
  });
});

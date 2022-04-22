import createFavoriteData from "../../../src/api/data/favorites/createFavoriteData";
import { favoriteModelMock, mockfavorite } from "./favoriteMocks";

describe("create favorite in data layer", () => {
  it("should return error when create error", async () => {
    favoriteModelMock.create = jest.fn().mockImplementation(() => {
      throw new Error("error on call function create");
    });

    try {
      await createFavoriteData(mockfavorite);
    } catch (error: any) {
      expect(error.message).toBe("error on call function create");
    }
  });

  it("should return an favorite on called function", async () => {
    favoriteModelMock.create = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockfavorite));
    const user = await createFavoriteData(mockfavorite);
    expect(user).not.toEqual(undefined);
    expect(favoriteModelMock.create).toHaveBeenCalledTimes(1);
  });
});

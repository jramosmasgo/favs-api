import getFavoriteByFieldData from "../../../src/api/data/favorites/getFavoriteByFieldData";
import { favoriteModelMock, mockfavorite } from "./favoriteMocks";

describe("get Favorite By field in data layer", () => {
  it("return not null when called function finOne", async () => {
    favoriteModelMock.findOne = jest
      .fn()
      .mockImplementation(() => mockfavorite);
    const result = await getFavoriteByFieldData({});
    expect(result).not.toBe(null);
  });
});

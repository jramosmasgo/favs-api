import getListFavoriteByFieldData from "../../../src/api/data/ListFavorites/getListFavoriteByFieldData";
import {
  mockListfavorite,
  favoriteListModelMock,
} from "../../utils/listFavoriteMock";

describe("get Favorite By field in data layer", () => {
  it("return not null when called function finOne", async () => {
    favoriteListModelMock.findOne = jest
      .fn()
      .mockImplementation(() => mockListfavorite);
    const result = await getListFavoriteByFieldData({});
    expect(result).not.toBe(null);
  });
});

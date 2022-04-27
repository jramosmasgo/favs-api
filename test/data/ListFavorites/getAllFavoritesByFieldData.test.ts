import getAllListFavoritesByFieldData from "../../../src/api/data/ListFavorites/getAllListFavoritesByFieldData";
import {
  favoriteListModelMock,
  mockListfavorite,
} from "../../utils/listFavoriteMock";

describe("get Favorites By filter field in data layer", () => {
  it("return array favroites", async () => {
    favoriteListModelMock.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve([mockListfavorite]));
    const result = await getAllListFavoritesByFieldData({});
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});

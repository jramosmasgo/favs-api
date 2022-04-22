import getAllFavoritesByFieldData from "../../../src/api/data/favorites/getAllFavoritesByFieldData";
import { favoriteModelMock, mockfavorite } from "./favoriteMocks";

describe("get Favorites By filter field in data layer", () => {
  it("return array favroites", async () => {
    favoriteModelMock.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve([mockfavorite]));
    const result = await getAllFavoritesByFieldData({});
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});

import supertest from "supertest";
import createFavoriteData from "../../../src/api/data/favorites/createFavoriteData";
import { Favorite } from "../../../src/api/interfaces/favorite";
import { UserID } from "../../../src/api/interfaces/user";
import createUserService from "../../../src/api/services/user/createUserService";
import { createToken } from "../../../src/api/utils/token";
import app from "../../../src/app";
import { mockfavorite } from "../../data/favorite/favoriteMocks";
import { mockUser } from "../../data/user/userMocks";
import { mockDatabase } from "../../utils/databaseMock";

const api = supertest(app);
const db = mockDatabase();
const urlAPI = "/api/favs";
let token: string = "";
let favoritecreate: Favorite;

describe("Testing endpoint delete favorite by ID", () => {
  beforeAll(async () => {
    (await db).connect();
    const { id } = await createUserService(mockUser);
    mockfavorite.user = <string | UserID>id?.toString();
    favoritecreate = await createFavoriteData(mockfavorite);
    token = createToken({ idUser: id });
  });

  it("should return error when token not provider", async () => {
    const { body, statusCode } = await api.delete(
      `${urlAPI}/${favoritecreate.id}`
    );
    expect(statusCode).toBe(401);
    expect(body.message).toBe("No token provided");
  });

  it("should return boolean when delete favorite", async () => {
    const { body, statusCode } = await api
      .delete(`${urlAPI}/${favoritecreate.id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(statusCode).toBe(200);
    expect(body.message).toBe("Favorited Removed");
  });

  afterAll(async () => {
    (await db).closeDatabase();
  });
});

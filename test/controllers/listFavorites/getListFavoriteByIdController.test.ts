import supertest from "supertest";
import createListFavoriteData from "../../../src/api/data/ListFavorites/createListFavoriteData";
import { ListFav } from "../../../src/api/interfaces/listFav";
import { UserID } from "../../../src/api/interfaces/user";
import createUserService from "../../../src/api/services/user/createUserService";
import { createToken } from "../../../src/api/utils/token";
import app from "../../../src/app";
import { mockUser } from "../../data/user/userMocks";
import { mockDatabase } from "../../utils/databaseMock";
import { mockListfavorite } from "../../utils/listFavoriteMock";

const api = supertest(app);
const db = mockDatabase();
const urlAPI = "/api/favs";
let token: string = "";
let listfavoritecreate: ListFav;

describe("Testing endpoint get favorite by ID", () => {
  beforeAll(async () => {
    (await db).connect();
    const { id } = await createUserService(mockUser);
    mockListfavorite.user = <string | UserID>id?.toString();
    listfavoritecreate = await createListFavoriteData(mockListfavorite);
    token = createToken({ idUser: id });
  });

  it("should return error when token not provider", async () => {
    const { body, statusCode } = await api.get(
      `${urlAPI}/${listfavoritecreate.id}`
    );
    expect(statusCode).toBe(401);
    expect(body.message).toBe("No token provided");
  });

  it("should return favorite when pass valid id", async () => {
    const { body, statusCode } = await api
      .get(`${urlAPI}/${listfavoritecreate.id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(statusCode).toBe(200);
    expect(body.message).toBe("Favorite Found");
  });

  it("should return error when pass valid id", async () => {
    const { body, statusCode } = await api
      .get(`${urlAPI}/idnovalid`)
      .set("Authorization", `Bearer ${token}`);
    expect(statusCode).toBe(400);
    expect(body.ok).toBe(false);
  });

  afterAll(async () => {
    (await db).closeDatabase();
  });
});

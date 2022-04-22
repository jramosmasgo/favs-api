import supertest from "supertest";
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

describe("Testing endpoint Create favorite", () => {
  beforeAll(async () => {
    (await db).connect();
    const { id } = await createUserService(mockUser);
    token = createToken({ idUser: id });
  });

  it("should return error when token not provider", async () => {
    const { body, statusCode } = await api.post(urlAPI).send(mockfavorite);
    expect(statusCode).toBe(401);
    expect(body.message).toBe("No token provided");
  });

  it("should return create favorite", async () => {
    const { body, statusCode } = await api
      .post(urlAPI)
      .send(mockfavorite)
      .set("Authorization", `Bearer ${token}`);
    expect(statusCode).toBe(200);
    expect(body.message).toBe("Favorite Created");
  });

  afterAll(async () => {
    (await db).closeDatabase();
  });
});

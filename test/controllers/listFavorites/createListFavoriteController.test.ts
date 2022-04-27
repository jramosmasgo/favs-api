import supertest from "supertest";
import app from "../../../src/app";
import {
  createUserAndGenerateToken,
  url_fav,
} from "../../utils/controllersUtils";
import { mockDatabase } from "../../utils/databaseMock";
import { mockListfavorite } from "../../utils/listFavoriteMock";

const api = supertest(app);
const db = mockDatabase();
let token: string = "";

describe("Testing endpoint Create favorite", () => {
  beforeAll(async () => {
    (await db).connect();
    token = await createUserAndGenerateToken();
  });

  it("should return error when token not provider", async () => {
    const { body, statusCode } = await api.post(url_fav).send(mockListfavorite);
    expect(statusCode).toBe(401);
    expect(body.message).toBe("No token provided");
  });

  it("should return create favorite", async () => {
    const { body, statusCode } = await api
      .post(url_fav)
      .send(mockListfavorite)
      .set("Authorization", `Bearer ${token}`);
    expect(statusCode).toBe(200);
    expect(body.message).toBe("List Favorite Created");
  });

  afterAll(async () => {
    (await db).closeDatabase();
  });
});

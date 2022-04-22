import supertest from "supertest";
import createUserService from "../../../src/api/services/user/createUserService";
import app from "../../../src/app";
import { mockUser } from "../../data/user/userMocks";
import { mockDatabase } from "../../utils/databaseMock";

const api = supertest(app);
const db = mockDatabase();
const urlAPI = "/local/login";

describe("Testing endpoint Login User", () => {
  beforeAll(async () => {
    (await db).connect();
    await createUserService(mockUser);
  });

  it("should return succes when credential are corrects", async () => {
    const { body, statusCode } = await api
      .post(urlAPI)
      .send({ email: "ramosmasgo@gmail.com", password: "123456" });

    expect(statusCode).toBe(200);
    expect(body.data.token).not.toEqual(null);
    expect(body.message).toBe("Login success");
  });

  it("should return error when credential are incorrects", async () => {
    const { body, statusCode } = await api
      .post(urlAPI)
      .send({ email: "ramosmasgo@gmail.com", password: "654321" });

    expect(statusCode).toBe(400);
    expect(body.message).toBe("User not Found");
  });

  afterAll(async () => {
    (await db).closeDatabase();
  });
});

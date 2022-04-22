import supertest from "supertest";
import app from "../../../src/app";
import { mockUser } from "../../data/user/userMocks";
import { mockDatabase } from "../../utils/databaseMock";

const api = supertest(app);
const db = mockDatabase();
const urlAPI = "/auth/local/register";

describe("Testing endpoint Create User", () => {
  beforeAll(async () => {
    (await db).connect();
  });

  it("should return user create", async () => {
    const { body, statusCode } = await api.post(urlAPI).send(mockUser);
    expect(statusCode).toBe(200);
    expect(body.message).toEqual("Register success");
    expect(body.ok).toEqual(true);
  });

  it("should return error on pass object empty", async () => {
    const { body, statusCode } = await api.post(urlAPI).send({});
    expect(statusCode).toBe(400);
    expect(body.ok).toEqual(false);
  });

  afterAll(async () => {
    (await db).closeDatabase();
  });
});

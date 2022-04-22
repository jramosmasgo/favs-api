import createUserData from "../../../src/api/data/user/createUserData";
import UserModel from "../../../src/api/models/userModel";
import { mockUser } from "./userMocks";

const userModelMock = UserModel as jest.MockedClass<typeof UserModel>;

describe("create user in data layer", () => {
  it("should return error when create error", async () => {
    userModelMock.create = jest.fn().mockImplementation(() => {
      throw new Error("error on create model user");
    });
    try {
      await createUserData(mockUser);
    } catch (error: any) {
      expect(error.message).toBe("error on create model user");
    }
  });

  it("should return an user on called function", async () => {
    userModelMock.create = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockUser));
    const user = await createUserData(mockUser);
    expect(user).not.toEqual(undefined);
    expect(userModelMock.create).toHaveBeenCalledTimes(1);
  });
});

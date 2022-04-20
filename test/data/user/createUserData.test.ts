import createUserData from "../../../src/api/data/user/createUserData";
import { User } from "../../../src/api/interfaces/user";
import UserModel from "../../../src/api/models/userModel";

const userModelMock = UserModel as jest.MockedClass<typeof UserModel>;

const mockUser: User = {
  email: "ramosmasgo@gmail.com",
  name: "Jean Ramos Masgo",
  password: "123456",
};

describe("create user in data layer", () => {
  it("should return error when passsing a bad object", async () => {
    userModelMock.create = jest.fn().mockImplementation(() => {
      throw new Error("error on create model user");
    });
    try {
      await createUserData(mockUser);
    } catch (error: any) {
      expect(error.message).toBe("error on create model user");
    }
  });

  it("should return on calles function", async () => {
    userModelMock.create = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockUser));
    const user = await createUserData(mockUser);
    expect(user).not.toEqual(undefined);
    expect(userModelMock.create).toHaveBeenCalledTimes(1);
  });
});

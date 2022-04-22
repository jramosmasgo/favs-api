import getUserByFieldData from "../../../src/api/data/user/getUserByFieldData";
import UserModel from "../../../src/api/models/userModel";
import { mockUser } from "./userMocks";

const userModelMock = UserModel as jest.MockedClass<typeof UserModel>;

describe("get user by field in data layer", () => {
  it("should return error on find One return error", async () => {
    userModelMock.findOne = jest.fn().mockImplementation(() => {
      throw new Error("Error on call Find Method");
    });

    try {
      await getUserByFieldData({ name: mockUser.name });
    } catch (error: any) {
      expect(error.message).toBe("Error on call Find Method");
    }
  });

  it("should retrun an user when findone is called", async () => {
    userModelMock.findOne = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockUser));

    const userFound = await getUserByFieldData({ namw: mockUser.name });
    expect(userModelMock.findOne).toHaveBeenCalledTimes(1);
    expect(userFound).toEqual(mockUser);
  });
});

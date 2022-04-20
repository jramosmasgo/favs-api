import { Types } from "mongoose";

export interface User {
  id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
}

export type UserID = {
  id: Types.ObjectId;
};

import { Types } from "mongoose";
import { UserID } from "./user";

export interface Favorite {
  id?: Types.ObjectId;
  user: UserID | string;
  items: string[];
  title: string;
  description: string;
  url: string;
}

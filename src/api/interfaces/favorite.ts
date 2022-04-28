import { Types } from "mongoose";

export interface Favorite {
  id?: Types.ObjectId;
  title: string;
  description: string;
  link: string;
}

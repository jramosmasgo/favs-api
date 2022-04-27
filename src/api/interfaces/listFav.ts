import { Types } from "mongoose";
import { Favorite } from "./favorite";
import { UserID } from "./user";

export interface ListFav {
  id?: string | Types.ObjectId;
  user: UserID | string;
  name: string;
  favs: Favorite[];
}

export type ListFavId = {
  id: Types.ObjectId;
};

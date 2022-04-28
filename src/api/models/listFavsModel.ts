import { model } from "mongoose";
import { ListFav } from "../interfaces/listFav";
import listFavsSchema from "../schemas/listFavsSchema";

const ListFavsModel = model<ListFav>("ListFavs", listFavsSchema);

export default ListFavsModel;

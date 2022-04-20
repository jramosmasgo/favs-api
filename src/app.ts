import dotenv from "dotenv";
import express, { Application } from "express";
dotenv.config();
import ErrorMiddleware from "./api/middlewares/ErrorManage";
import userRoutes from "./api/routes/userRoutes";
import favoritesRoutes from "./api/routes/favoriteRoutes";

const app: Application = express();

app.use(express.json());

app.use(userRoutes);
app.use(favoritesRoutes);

app.set("port", process.env.PORT || 4000);
app.use(ErrorMiddleware);

export default app;

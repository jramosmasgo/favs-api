import dotenv from "dotenv";
import express, { Application } from "express";
dotenv.config();
import ErrorMiddleware from "./api/middlewares/ErrorManage";
import userRoutes from "./api/routes/userRoutes";

const app: Application = express();

app.use(express.json());

app.use(userRoutes);

app.set("port", process.env.PORT || 4000);
app.use(ErrorMiddleware);

export default app;

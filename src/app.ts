import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import swaggerUI from "swagger-ui-express";
dotenv.config();
import ErrorMiddleware from "./api/middlewares/ErrorManage";
import swaggerConfiguration from "./docs/swaggerConfig";
import userRoutes from "./api/routes/userRoutes";
import favoritesRoutes from "./api/routes/favoriteRoutes";

const app: Application = express();

app.use(express.json());

app.use("/auth/local", userRoutes);
app.use("/api", favoritesRoutes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerConfiguration));

app.set("port", process.env.PORT || 4000);
app.use(ErrorMiddleware);
app.get("/", (_req: Request, res: Response) => {
  res.send(`FAVS API running on port ${app.get("port")}`);
});

export default app;

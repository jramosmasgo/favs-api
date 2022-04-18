import app from "./app";
import databaseConnection from "./config/database";

databaseConnection();

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

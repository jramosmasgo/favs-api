import mongoose from "mongoose";

const databaseConnection = () => {
  mongoose
    .connect(`${process.env.CONNECTION_DATABASE}`)
    .then((_res) => console.log("Database Connected"))
    .catch((err) => console.log(err));

  mongoose.connection.on("error", () => console.log("Error on db connection"));
  mongoose.connection.once("connected", () => console.log("db connected"));
};

export default databaseConnection;

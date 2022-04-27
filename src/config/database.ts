import mongoose from "mongoose";
import open from "open";

const databaseConnection = () => {
  mongoose
    .connect(`${process.env.CONNECTION_DATABASE}`)
    .then((_res) => {
      console.info("Database Connected");
      open("http://localhost:4000/docs");
    })
    .catch((err) => console.error(err));
};

export default databaseConnection;

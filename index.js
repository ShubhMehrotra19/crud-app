import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json());
dotenv.config(); // this will load the configuration in the env file

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully ✅");
    app.listen(PORT, () => {
      console.log(`Server is running on PORT : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

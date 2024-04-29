import express from "express";
require("dotenv").config();
import cors from "cors";

import initRouters from "./src/routers";
import connectDB from "./src/config/connectDB";
const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    menthods: ["POST", "GET", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRouters(app);
connectDB();

const port = process.env.PORT || 8888;
const listener = app.listen(port, () => {
  console.log(`server is runing on the port ${listener.address().port}`);
});

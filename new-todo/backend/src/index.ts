'use client'

import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 8000;
import { auth } from "./router/User";
import { connectDatabase } from "./utils/db";

const start = () => {
  const app = express();
  const PORT = 8000;
  app.use(express.json());
  app.use(cors());

  app.use("/auth", auth);

  //app.use(cors({origin : "*"}));

  connectDatabase();

  app.get("/", (req, res) => {
    res.status(200).send({ success: true, msg: "Working" });
  });

  app.listen(PORT, () => {
    console.log("Server is running");
  });
};
start();
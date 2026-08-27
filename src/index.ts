import express from "express";
import { connectToDB } from "./server";
import { env } from "./config/env";
import router from "./routes";

const APP = express();
const PORT = env.PORT;
APP.use(express.json());
APP.use(router);

async function startServer() {
  await connectToDB();
  APP.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Error starting the Server", err);
});

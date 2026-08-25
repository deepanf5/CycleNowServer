import mongoose from "mongoose";
import { env } from "./config/env";

export async function connectToDB() {
  try {
    const db = await mongoose.connect(env.MONGODB_URI);
    console.log("Connected to ", db.connection.name);
  } catch (error) {
    console.error(error)
    process.exit
  }
}

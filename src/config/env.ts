import jwt from "jsonwebtoken";
import { envSchema } from "./env.schema";

import dotenv from "dotenv";
dotenv.config();

export const env = envSchema.parse(process.env);

const JWT_SECRET: string = process.env.JWT_SECRET || "#ddks4948";
const EXPIRES: jwt.SignOptions["expiresIn"] = "1h";

export const TokenConfig = {
  getJwtScret() {
    return JWT_SECRET;
  },
  getExpireDay() {
    return EXPIRES;
  },
};

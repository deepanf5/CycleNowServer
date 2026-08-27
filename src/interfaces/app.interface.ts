import { Document } from "mongoose";

export interface UserI extends Document {
  userName: string;
  email: string;
  password: string;
  emailVerified: boolean;
  createdAt: Date;
  updateAt: Date;
}

export interface IUser {
  userName: string;
  email: string;
  password: string;
}

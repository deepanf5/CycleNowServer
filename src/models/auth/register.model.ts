import mongoose, { model, Schema } from "mongoose";
import type { UserI } from "../../interfaces/app.interface";

const userSchema = new Schema<UserI>(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 25,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    emailVerified: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export const User = model("Registered_users", userSchema);

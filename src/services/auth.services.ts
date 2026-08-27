import { TokenConfig } from "./../config/env";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import type { IUser } from "../interfaces/app.interface";
import { authRepository } from "../repository/auth.repository";

export const authServices = {
  async register({ userName, email, password }: IUser) {
    try {
      const userDetails = {
        userName,
        email,
        password: await this.hassPassword(password),
      };
      const createdUser = await authRepository.saveUser(userDetails);
      const token = await this.generateToken(createdUser);
      return {
        userName: createdUser.userName,
        email: createdUser.email,
        token,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  async hassPassword(password: string) {
    try {
      const salt = 10;
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  async generateToken(user: { userName: string; email: string }) {
    const token = await jwt.sign({ ...user }, TokenConfig.getJwtScret(), {
      expiresIn: TokenConfig.getExpireDay(),
    });
    return token;
  },

  async isNewUser(email: string): Promise<boolean> {
    return await authRepository.findUser(email);
  },
};

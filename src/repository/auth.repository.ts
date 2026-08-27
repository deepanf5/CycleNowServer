import type { IUser } from "../interfaces/app.interface";
import { User } from "../models/auth/register.model";

export const authRepository = {
  async findUser(email: string): Promise<boolean> {
    try {
      const user = await User.findOne({ email });
      if (user) return true;
      return false;
    } catch (error) {
      throw error;
    }
  },

  async saveUser(user: IUser): Promise<any> {
    try {
      return await User.create(user);
    } catch (error) {
      throw error;
    }
  },
};

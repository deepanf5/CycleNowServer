import bcrypt from "bcryptjs";
import { authRepository } from "./auth.repository";

export const loginRepository = {
  async validatePassword(password: string, userpassword: string) {
    return await bcrypt.compare(password, userpassword);
  },
};

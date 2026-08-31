import type { IUser } from "../interfaces/app.interface";
import { authRepository } from "../repository/auth.repository";
import { loginRepository } from "../repository/login.respository";

export const loginServices = {
  async findUser(email: string): Promise<any> {
    return await authRepository.findUser(email);
  },

  async validateUser(password: string, userpassword: string): Promise<boolean> {
    return await loginRepository.validatePassword(password, userpassword);
  },
};

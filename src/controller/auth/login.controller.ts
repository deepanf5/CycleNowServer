import type { Request, Response } from "express";
import { loginServices } from "../../services/login.services";
import { authServices } from "../../services/auth.services";

export const loginController = {
  async loginUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await loginServices.findUser(email);
      if (!user) {
        return res.status(400).json({
          status: 400,
          message: "Invalid email or password",
        });
      }

      const validPassword = await loginServices.validateUser(
        password,
        user.password,
      );

      if (!validPassword) {
        return res.status(400).json({
          status: 400,
          message: "Invalid email or password",
        });
      }
      const token = await authServices.generateToken({
        userName: user.userName,
        email: user.email,
      });
      return res.status(200).json({
        status: 200,
        message: "Login Success",
        token,
        userInfo: {
          userName: user.userName,
          email: user.email,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
      });
    }
  },
};

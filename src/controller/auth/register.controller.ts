import type { Request, Response } from "express";
import { authServices } from "../../services/auth.services";

export const registerController = {
  async user(req: Request, res: Response) {
    try {
      const isUserExists = await authServices.isNewUser(req.body.email);
      if (isUserExists)
        return res.status(409).json({
          message: "User is Already Exists",
        });
      const userInfo = await authServices.register(req.body);

      res.status(201).json({
        message: "User registered successfully",
        userInfo,
      });
    } catch (error) {
      res.status(500).json({
        message: "Interal Server Error",
        error: error,
      });
    }
  },
};

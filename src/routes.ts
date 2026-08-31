import express from "express";
import type { Request, Response } from "express";
import { registerController } from "./controller/auth/register.controller";
import { authValidation } from "./middleware/validateUser.middleware";
import { loginController } from "./controller/auth/login.controller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send({ message: "Cycle Server is Running" });
});

router.post(
  "/api/register",
  authValidation.validUserScehama(),
  registerController.user,
);
router.post(
  "/api/login",
  authValidation.loginValidation(),
  loginController.loginUser,
);

export default router;

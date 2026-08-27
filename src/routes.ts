import express from "express";
import type { Request, Response } from "express";
import { registerController } from "./controller/auth/register.controller";
import { validUserScehama } from "./middleware/validateUser.middleware";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send({ message: "Cycle Server is Running" });
});

router.post("/api/register", registerController.user);
// router.post("/api/login");

export default router;

import type { NextFunction, Request, Response } from "express";
import { loginSchemaZ, userSchemaZ } from "../Validations/auth.validation";
import z from "zod";

export const authValidation = {
  validUserScehama() {
    return (req: Request, res: Response, next: NextFunction) => {
      const parseSchema = userSchemaZ.safeParse(req.body);
      if (!parseSchema.success) {
        return res.status(400).json({
          message: "bad Request",
          error: z.flattenError(parseSchema.error),
        });
      }
      req.body = parseSchema.data;
      next();
    };
  },

  loginValidation() {
    return (req: Request, res: Response, next: NextFunction) => {
      const parseSchema = loginSchemaZ.safeParse(req.body);
      if (!parseSchema.success) {
        return res.status(400).json({
          message: "bad request",
          error: z.flattenError(parseSchema.error),
        });
      }
      req.body = parseSchema.data;
      next();
    };
  },
};

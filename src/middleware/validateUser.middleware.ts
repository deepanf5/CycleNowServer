import type { NextFunction, Request, Response } from "express";
import { userSchemaZ } from "../Validations/auth.validation";
import z from "zod";

export const validUserScehama = () => {
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
};

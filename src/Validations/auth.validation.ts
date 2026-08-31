import { z } from "zod";

export const userSchemaZ = z.object({
  userName: z
    .string()
    .min(3, "UserName is Atleast 3 char")
    .max(25, "UserName cannot have more than 25"),
  email: z.email(),
  password: z
    .string()
    .min(8, "Password is mininum 8 character")
    .max(100, "password is too long"),
});

export const loginSchemaZ = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, "Password is mininum 8 character")
    .max(100, "password is too long"),
});

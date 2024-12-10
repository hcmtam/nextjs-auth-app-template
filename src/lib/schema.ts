import * as z from "zod";

export const LoginSchema = z.object({
  userEmail: z.string().email({
    message: "Please enter your email address",
  }),
  password: z.string().min(8, {
    message: "Please enter your password",
  }),
  rememberMe: z.boolean(),
});

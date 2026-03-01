
import { z } from "zod";

export const loginValidation = z.object({
  email: z
    .string({
      error: "Email is required",
    })
    .min(1, "Email is required")
    .email({ message: "Invalid email address" }),

  password: z
    .string({
      error: "Password is required",
    })
    .min(1, "Password is required"),
});

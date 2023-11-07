import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, {
    message: "Por favor, ensira um nome verdadeiro"
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Sua senha não possui o minimo de caracteres",
  }),
});

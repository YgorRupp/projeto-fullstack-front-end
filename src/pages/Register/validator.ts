import { z } from "zod";

export const registerSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export type RegisterData = z.infer<typeof registerSchema>;

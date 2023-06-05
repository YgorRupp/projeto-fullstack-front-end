import { useContext } from "react";
import { RegisterContext } from "../../providers/UserContext";
import { useForm } from "react-hook-form";
import { RegisterData, registerSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

export const Register = () => {
  const { userRegister } = useContext(RegisterContext);

  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <main>
      <h2>Cadastro</h2>

      <form onSubmit={handleSubmit(userRegister)}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" {...register("name")} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />

        <label htmlFor="phone">Telefone</label>
        <input type="text" id="phone" {...register("phone")} />

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
};

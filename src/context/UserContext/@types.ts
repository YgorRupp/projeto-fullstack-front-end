import React from "react";

export interface iChildren {
  children: React.ReactNode;
}

export interface iUserLoginResponse {
  accessToken: string;
  user: iUserLogin;
}

export interface iUserLogin {
  email: string;
  id: number;
  nome: string;
  phone: string;
  created_at?: boolean;
}

export interface iUserRegisterResponse {
  accessToken: string;
  user: iUserRegister;
}

export interface iUserRegister {
  email: string;
  nome: string;
  phone: string;
  password: number;
}

export interface iUser {
  email: string;
  id: number;
}

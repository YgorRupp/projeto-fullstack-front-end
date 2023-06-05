import { ReactNode, createContext } from "react";
import { RegisterData } from "../pages/Register/validator";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import React from "react";

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterContextValues {
  userRegister: (data: RegisterData) => void;
}

export const RegisterContext = createContext<RegisterContextValues>(
  {} as RegisterContextValues
);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const navigate = useNavigate();

  const userRegister = async (data: RegisterData) => {
    try {
      const response = await api.post("/login", data);

      if (response) {
        navigate("dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RegisterContext.Provider value={{ userRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

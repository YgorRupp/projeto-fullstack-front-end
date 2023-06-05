import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import React from "react";
import { Register } from "../pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
};

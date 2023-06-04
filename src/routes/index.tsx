import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import React from "react";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

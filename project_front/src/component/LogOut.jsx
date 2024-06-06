import React from "react";
import { Navigate } from "react-router-dom";

const LogOut = () => {
  sessionStorage.clear();
  return <Navigate to="/" />;
};
export default LogOut;

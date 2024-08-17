import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./StateInterface";
import React from "react";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = useSelector((state: RootState) => state.auth.userAuth);
  // localStorage.clear();

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

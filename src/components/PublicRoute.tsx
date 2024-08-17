import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./StateInterface";
import React from "react";

type PublicRouteProps = {
  children: React.ReactNode;
};

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const token = useSelector((state: RootState) => state.auth.userAuth);
  return !token ? children : <Navigate to="/dashboard" />;
};

export default PublicRoute;

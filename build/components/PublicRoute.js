import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PublicRoute = ({ children }) => {
    const token = useSelector((state) => state.auth.userAuth);
    return !token ? children : _jsx(Navigate, { to: "/dashboard" });
};
export default PublicRoute;

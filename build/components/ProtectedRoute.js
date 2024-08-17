import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ children }) => {
    const token = useSelector((state) => state.auth.userAuth);
    // localStorage.clear();
    return token ? children : _jsx(Navigate, { to: "/login", replace: true });
};
export default ProtectedRoute;

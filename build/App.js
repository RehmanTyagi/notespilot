import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ConfirmEmail from "./pages/ConfirmEmail";
import ResetPassword from "./pages/ResetPassword";
// App component
import Notification from "./components/Notification";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
const App = () => {
    return (_jsxs(Router, { children: [_jsx(Notification, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "dashboard", element: _jsx(ProtectedRoute, { children: _jsx("h1", { className: "bg-default", children: "dashboard" }) }) }), _jsx(Route, { path: "login", element: _jsx(PublicRoute, { children: _jsx(Login, {}) }) }), _jsx(Route, { path: "signup", element: _jsx(PublicRoute, { children: _jsx(Signup, {}) }) }), _jsx(Route, { path: "confirmemail", element: _jsx(PublicRoute, { children: _jsx(ConfirmEmail, {}) }) }), _jsx(Route, { path: "forget", element: _jsx(PublicRoute, { children: _jsx(ForgotPassword, {}) }) }), _jsx(Route, { path: "resetpassword/:resetToken", element: _jsx(PublicRoute, { children: _jsx(ResetPassword, {}) }) })] })] }));
};
export default App;

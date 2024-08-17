import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useVerifyEmailQuery } from "../store/authApiSlice";
import Spinner from "../components/common/Spinner";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
const ConfirmEmail = () => {
    const search = new URLSearchParams(location.search);
    const token = search.get("token");
    const { data, isLoading, error } = useVerifyEmailQuery(token);
    return (_jsx("div", { className: "grid h-dvh place-items-center bg-default", children: _jsxs("div", { className: "grid h-52 w-4/5 place-items-center bg-white shadow-md md:h-2/3 md:w-2/4", children: [isLoading && _jsx(Spinner, { className: "border-primary" }), error && (_jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("h1", { className: "text-xl font-bold text-red-400", children: "Error Occured:" }), _jsx("p", { className: "text-red-400", children: error && "error occurred" })] })), data && (_jsxs("div", { className: "flex flex-col items-center gap-4", children: [_jsx("h1", { className: "text-2xl font-bold text-green-400", children: "Email Verified" }), _jsx(Button, { type: "button", className: "px-5", children: _jsx(Link, { to: "/login", children: "Login Now" }) })] }))] }) }));
};
export default ConfirmEmail;

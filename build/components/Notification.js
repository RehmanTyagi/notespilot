import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { clearAlert } from "../store/alertSlice";
import { useDispatch } from "react-redux";
const Notification = () => {
    const dispatch = useDispatch();
    const alert = useSelector((state) => state.alert);
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(clearAlert());
        }, alert.alertExpires);
        return () => clearTimeout(timer);
    }, [dispatch, alert, alert.alertExpires]);
    return (_jsxs("div", { className: `duration-400 fixed flex items-center justify-center transition-transform ${alert.message ? "translate-y-0" : "-translate-y-full"} ${alert.type === "error" ? "bg-red-500" : "bg-primary"} w-full p-1.5 text-center text-white`, children: [_jsx("div", { className: "w-full text-sm", children: alert.message }), _jsx(IoClose, { onClick: () => dispatch(clearAlert()), className: "cursor-pointer bg-gray-300/50 hover:bg-primary" })] }));
};
export default Notification;

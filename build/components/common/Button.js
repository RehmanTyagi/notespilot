import { jsx as _jsx } from "react/jsx-runtime";
import Spinner from "./Spinner";
const Button = ({ type, children, className, isDisabled, isLoading, }) => {
    return (_jsx("button", { className: `${className} ${isDisabled && "cursor-not-allowed opacity-50"} flex h-12 w-full items-center justify-center rounded bg-primary p-2.5 py-3 font-semibold text-white hover:bg-primary/80`, type: type, children: isLoading ? _jsx(Spinner, {}) : children }));
};
export default Button;

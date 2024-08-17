import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const Input = forwardRef(({ placeholder, type, onChange, className, ...rest }, ref) => {
    return (_jsx("input", { ...rest, ref: ref, className: `${className} w-full rounded border border-gray-300 p-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400`, placeholder: placeholder, type: type, onChange: onChange }));
});
Input.displayName = "Input";
export default Input;

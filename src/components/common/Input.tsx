import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type, onChange, className, ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        className={`${className} w-full rounded border border-gray-300 p-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400`}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    );
  },
);
Input.displayName = "Input";

export default Input;

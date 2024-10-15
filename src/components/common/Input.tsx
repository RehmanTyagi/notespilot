import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: string;
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder, type, disabled, onChange, value, className, ...rest },
    ref,
  ) => {
    return (
      <input
        {...rest}
        ref={ref}
        value={value}
        disabled={disabled}
        className={`${className} w-full rounded border-2 p-3 text-sm placeholder:text-gray-500 focus:border-primary focus:outline-none dark:bg-transparent`}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    );
  },
);
Input.displayName = "Input";

export default Input;

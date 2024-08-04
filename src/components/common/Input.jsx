import { forwardRef } from 'react';

const Input = forwardRef(
  ({ placeholder, type, onChange, className, ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        className={`${className} w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent`}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    );
  }
);
Input.displayName = 'Input';

export default Input;

import React, { forwardRef } from "react";
import Spinner from "./Spinner";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, children, className, isDisabled, isLoading, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={isDisabled || isLoading}
        className={`${className ? className : ""} ${
          isDisabled ? "cursor-not-allowed opacity-50" : ""
        } flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white`}
        type={type}
      >
        {isLoading ? <Spinner className="border-white" /> : children}
      </button>
    );
  },
);

export default Button;

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
        className={`${className} ${
          isDisabled && "cursor-not-allowed opacity-50"
        } flex h-12 w-full items-center justify-center rounded bg-primary p-2 text-sm font-semibold text-white hover:bg-primary/80`}
        type={type}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    );
  },
);

export default Button;

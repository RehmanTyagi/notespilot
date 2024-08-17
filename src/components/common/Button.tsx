import React from "react";
import Spinner from "./Spinner";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  className,
  isDisabled,
  isLoading,
}) => {
  return (
    <button
      className={`${className} ${
        isDisabled && "cursor-not-allowed opacity-50"
      } flex h-12 w-full items-center justify-center rounded bg-primary p-2.5 py-3 font-semibold text-white hover:bg-primary/80`}
      type={type}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;

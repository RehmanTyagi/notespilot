import React from "react";

interface SpinnerProps {
  className?: string;
}
const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <div
      className={`${className} text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
    ></div>
  );
};

export default Spinner;

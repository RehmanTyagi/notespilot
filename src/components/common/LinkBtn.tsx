import React from "react";
import { Link } from "react-router-dom";

interface LinkBtnProps {
  children: React.ReactNode;
  className?: string;
  to: string;
}

const LinkBtn: React.FC<LinkBtnProps> = ({ children, className, to }) => {
  return (
    <Link
      to={to}
      className={`${className} mt-2 w-full rounded-3xl bg-primary p-2.5 px-6 text-center text-lg font-bold text-white md:m-0 md:w-auto`}
    >
      {children}
    </Link>
  );
};

export default LinkBtn;

import React from "react";

interface ToolBtnProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  Icon?: React.ReactNode;
  children?: React.ReactNode;
  tooltipMsg?: string;
  className?: string;
}

const ToolBtn: React.FC<ToolBtnProps> = ({
  onClick,
  children,
  tooltipMsg,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      data-tooltip={tooltipMsg}
      className={`${className} group relative flex cursor-pointer items-center rounded p-2 before:absolute before:-top-9 before:left-2/4 before:hidden before:w-max before:-translate-x-2/4 before:rounded before:bg-primary ${tooltipMsg ? "before:p-1" : ""} before:text-xs before:text-white before:content-[attr(data-tooltip)] hover:bg-primary/10 hover:before:block`}
    >
      {children}
    </div>
  );
};

export default ToolBtn;

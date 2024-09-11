import { SlOptionsVertical } from "react-icons/sl";
import { Note } from "@/types";
import React from "react";

interface HeaderProps {
  note: Note;
}
const Header: React.FC<HeaderProps> = ({ note }) => {
  const { title, description } = note;
  return (
    <div className="flex justify-between p-2 md:p-4">
      <div>
        <h1 className="text-lg font-bold text-dark md:text-2xl">
          {title || "Untitled"}
        </h1>
        <p className="text-xs font-bold text-dark/50 md:text-base">
          {description || "No description"}
        </p>
      </div>
      <div className="flex gap-4 text-dark">
        <SlOptionsVertical className="relative top-[1.5px] cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;

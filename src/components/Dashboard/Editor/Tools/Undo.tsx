import React from "react";
import { ToolProps } from "@/types";
import { MdOutlineUndo } from "react-icons/md";

import ToolBtn from "../ToolBtn";
const Undo: React.FC<ToolProps> = ({ editor }) => {
  const handleUndo = () => {
    editor.chain().focus().undo().run();
  };
  return (
    <ToolBtn tooltipMsg="Reverse" onClick={handleUndo}>
      <MdOutlineUndo />
    </ToolBtn>
  );
};

export default Undo;

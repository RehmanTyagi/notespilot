import React from "react";
import { ToolProps } from "@/types";
import { MdOutlineRedo } from "react-icons/md";

import ToolBtn from "../ToolBtn";
const Redo: React.FC<ToolProps> = ({ editor }) => {
  const handleRedo = () => {
    editor.chain().focus().redo().run();
  };
  return (
    <ToolBtn tooltipMsg="Redo" onClick={handleRedo}>
      <MdOutlineRedo />
    </ToolBtn>
  );
};

export default Redo;

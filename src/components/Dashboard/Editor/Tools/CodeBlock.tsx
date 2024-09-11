import React from "react";
import { ToolProps } from "@/types";
import { FaCode } from "react-icons/fa";
import ToolBtn from "../ToolBtn";

const CodeBlock: React.FC<ToolProps> = ({ editor }) => {
  const handleCodeBlock = () => {
    editor.chain().focus().toggleCodeBlock({ language: "javascript" }).run();
  };
  return (
    <ToolBtn tooltipMsg="Code Block">
      <FaCode onClick={handleCodeBlock} />
    </ToolBtn>
  );
};

export default CodeBlock;

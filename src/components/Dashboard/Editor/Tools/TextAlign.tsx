import React from "react";
import {
  MdOutlineFormatAlignLeft,
  MdOutlineFormatAlignRight,
  MdOutlineFormatAlignCenter,
  MdOutlineFormatAlignJustify,
} from "react-icons/md";
import { ToolProps } from "@/types";
import Dropdown from "../../../common/Dropdown";
import ToolBtn from "../ToolBtn";

const textAlignOptions = ["left", "center", "right", "justify"];
const TextAlign: React.FC<ToolProps> = ({ editor }) => {
  const [textAlign, setTextAlign] = React.useState("left");

  const handleTextAlign = (textAlign: string) => {
    editor.chain().focus().setTextAlign(textAlign).run();
    setTextAlign(textAlign);
  };

  return (
    <ToolBtn className="!p-0 hover:bg-transparent" tooltipMsg="Text Align">
      <Dropdown>
        <Dropdown.DropdownButton>
          {textAlign === "left" && <MdOutlineFormatAlignLeft size={15} />}
          {textAlign === "center" && <MdOutlineFormatAlignCenter size={15} />}
          {textAlign === "right" && <MdOutlineFormatAlignRight size={15} />}
          {textAlign === "justify" && <MdOutlineFormatAlignJustify size={15} />}
        </Dropdown.DropdownButton>
        <Dropdown.DropdownMenu className="right-0 top-12 flex">
          {textAlignOptions.map((option) => (
            <div key={option} onClick={() => handleTextAlign(option)}>
              {option === "left" ? (
                <ToolBtn tooltipMsg="align to left">
                  <MdOutlineFormatAlignLeft />
                </ToolBtn>
              ) : option === "center" ? (
                <ToolBtn tooltipMsg="align to center">
                  <MdOutlineFormatAlignCenter />
                </ToolBtn>
              ) : option === "right" ? (
                <ToolBtn tooltipMsg="align to right">
                  <MdOutlineFormatAlignRight />
                </ToolBtn>
              ) : (
                <ToolBtn tooltipMsg="justify content">
                  <MdOutlineFormatAlignJustify />
                </ToolBtn>
              )}
            </div>
          ))}
        </Dropdown.DropdownMenu>
      </Dropdown>
    </ToolBtn>
  );
};

export default TextAlign;

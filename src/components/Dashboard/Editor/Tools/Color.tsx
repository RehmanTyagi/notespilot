import React from "react";
import { ToolProps } from "@/types";
import { colorPalette } from "../../../../constants/colorsCode";
import Dropdown from "../../../common/Dropdown";
import ToolBtn from "../ToolBtn";

import { BiPaintRoll } from "react-icons/bi";

interface ColorProps extends ToolProps {
  position?: string;
}

const Color: React.FC<ColorProps> = ({ editor, position }) => {
  return (
    <Dropdown>
      <Dropdown.DropdownButton>
        <ToolBtn tooltipMsg="Color Text" className="!bg-transparent !p-0">
          <BiPaintRoll size={15} />
        </ToolBtn>
      </Dropdown.DropdownButton>
      <Dropdown.DropdownMenu
        className={`${position} right-0 top-12 grid grid-cols-4 gap-1`}
      >
        {colorPalette.map((color, index) => (
          <button
            key={index}
            onClick={() => editor.commands.setColor(color.hex)}
            style={{ backgroundColor: color.hex }}
            className="h-6 w-6 rounded-full border-2 border-primary"
          ></button>
        ))}
        <button
          onClick={() => editor.commands.unsetColor()}
          className="relative h-6 w-6 rounded-full border-2 border-red-600 before:absolute before:left-2/4 before:top-0 before:h-full before:w-0.5 before:-translate-x-2/4 before:rotate-45 before:bg-red-400 before:content-['']"
        ></button>
      </Dropdown.DropdownMenu>
    </Dropdown>
  );
};

export default Color;

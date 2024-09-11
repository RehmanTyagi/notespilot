import React from "react";
import { ToolProps } from "@/types";

import Dropdown from "../../../common/Dropdown";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import ToolBtn from "../ToolBtn";
const LineSpacing: React.FC<ToolProps> = ({ editor }) => {
  const handleLineSpacing = (value: string) => {
    (editor.commands as any).setLineSpacing(value);
  };
  return (
    <Dropdown>
      <Dropdown.DropdownButton>
        <ToolBtn className="!bg-transparent !p-0" tooltipMsg="Line Spacing">
          <MdOutlineFormatLineSpacing size={15} />
        </ToolBtn>
      </Dropdown.DropdownButton>
      <Dropdown.DropdownMenu>
        <ToolBtn tooltipMsg="unit" onClick={() => handleLineSpacing("1.5")}>
          1.5
        </ToolBtn>
        <ToolBtn tooltipMsg="unit" onClick={() => handleLineSpacing("2")}>
          2.0
        </ToolBtn>
        <ToolBtn tooltipMsg="unit" onClick={() => handleLineSpacing("2.5")}>
          2.5
        </ToolBtn>
        <ToolBtn tooltipMsg="unit" onClick={() => handleLineSpacing("3")}>
          3.0
        </ToolBtn>
      </Dropdown.DropdownMenu>
    </Dropdown>
  );
};

export default LineSpacing;

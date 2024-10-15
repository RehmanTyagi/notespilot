import React from "react";
import { ToolProps } from "@/types";
import ToolBtn from "../ToolBtn";
import {
  MdOutlineFormatListBulleted,
  MdFormatListNumbered,
} from "react-icons/md";
import Dropdown from "../../../common/Dropdown";
const BulletList: React.FC<ToolProps> = ({ editor }) => {
  const addBulletList = () => {
    editor.commands.toggleBulletList();
  };
  const addOrderedList = () => {
    editor.commands.toggleOrderedList();
  };
  return (
    <ToolBtn tooltipMsg="Lists" className="!bg-transparent !p-0">
      <Dropdown>
        <Dropdown.DropdownButton>
          <MdOutlineFormatListBulleted />
        </Dropdown.DropdownButton>
        <Dropdown.DropdownMenu className="top-12">
          <ToolBtn tooltipMsg="Unorder list" onClick={addBulletList}>
            <MdOutlineFormatListBulleted size={15} />
          </ToolBtn>
          <ToolBtn tooltipMsg="Number list" onClick={addOrderedList}>
            <MdFormatListNumbered size={15} />
          </ToolBtn>
        </Dropdown.DropdownMenu>
      </Dropdown>
    </ToolBtn>
  );
};

export default BulletList;

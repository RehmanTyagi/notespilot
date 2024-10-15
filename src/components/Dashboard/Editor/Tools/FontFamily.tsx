import Dropdown from "../../../common/Dropdown";
import React, { useEffect } from "react";
import ToolBtn from "../ToolBtn";
import { ToolProps } from "@/types";
import { getValueOnCursor } from "../../../../utils/getAttributeValue";

const families = [
  "Arial",
  "Arial Black",
  "Comic Sans MS",
  "Courier New",
  "Georgia",
  "Impact",
  "Lucida Console",
  "Lucida Sans Unicode",
  "Palatino Linotype",
  "Tahoma",
  "Times New Roman",
  "Trebuchet MS",
  "Verdana",
  "fantasy",
  "monospace",
  "serif",
  "sans-serif",
];

const FontFamily: React.FC<ToolProps> = ({ editor }) => {
  const [fontFamily, setFontFamily] = React.useState<string>("Font Family");

  const handleFontChange = (font: string) => {
    const isCommandExecuted = editor.chain().focus().setFontFamily(font).run();
    if (isCommandExecuted) {
      setFontFamily(formatFontFamily(font));
    }
  };

  useEffect(() => {
    const handleOnLineChange = () => {
      const value = getValueOnCursor({ editor, attributeType: "font-family" });
      if (value) {
        setFontFamily(formatFontFamily(value.split(",")[0]));
      }
    };

    editor.on("selectionUpdate", handleOnLineChange);

    return () => {
      editor.off("selectionUpdate", handleOnLineChange);
    };
  }, [editor, fontFamily]);

  const formatFontFamily = (fontFamily: string) => {
    return fontFamily.replace(/"/g, "");
  };

  return (
    <Dropdown className="flex cursor-pointer">
      <Dropdown.DropdownButton iconSize={20}>
        <p>{fontFamily}</p>
      </Dropdown.DropdownButton>
      <Dropdown.DropdownMenu className="scrollbar-visible left-0 top-12 flex h-64 flex-col overflow-y-scroll">
        {families.map((font, idx) => (
          <ToolBtn key={idx} onClick={() => handleFontChange(font)}>
            <p>{font}</p>
          </ToolBtn>
        ))}
      </Dropdown.DropdownMenu>
    </Dropdown>
  );
};

export default FontFamily;

import Dropdown from "../../../common/Dropdown";
import { ToolProps } from "@/types";
import ToolBtn from "../ToolBtn";
import { useEffect, useState } from "react";
import { Editor } from "@tiptap/core";

const headingLevels = [1, 2, 3, 4, 5, 6];

const Heading: React.FC<ToolProps> = ({ editor }) => {
  const [headingLevel, setHeadingLevel] = useState<string>("Normal");

  function getHeadingLevelAtCursor(editor: Editor): number | null {
    const { state } = editor;
    const { selection } = state;
    const { $from } = selection;
    const node = $from.node($from.depth);

    if (node.type.name === "heading") {
      return node.attrs.level;
    }
    return null;
  }

  useEffect(() => {
    const level = getHeadingLevelAtCursor(editor);
    if (level) {
      setHeadingLevel(`H${level}`);
    } else {
      setHeadingLevel("Normal");
    }
  }, [editor.state.selection]);

  return (
    <Dropdown className="flex cursor-pointer">
      <Dropdown.DropdownButton iconSize={20}>
        <p>{headingLevel}</p>
      </Dropdown.DropdownButton>
      <Dropdown.DropdownMenu className="left-0 top-12">
        {headingLevels.map((level, idx) => (
          <ToolBtn
            key={idx}
            onClick={() => editor.chain().toggleHeading({ level }).run()}
          >
            <p>Heading {level}</p>
          </ToolBtn>
        ))}
      </Dropdown.DropdownMenu>
    </Dropdown>
  );
};

export default Heading;

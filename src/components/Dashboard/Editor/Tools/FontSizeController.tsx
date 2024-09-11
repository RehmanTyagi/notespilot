import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { ToolProps } from "@/types";
import { getValueOnCursor } from "../../../../utils/getAttributeValue";

const FontSizeController: React.FC<ToolProps> = ({ editor }) => {
  const [fontSize, setFontSize] = useState(0);

  const handleFontSizeIncrement = () => {
    if (fontSize === 400) return;
    setFontSize((prev) => (prev += 1));
    editor.chain().focus().setFontSize(`${fontSize}px`).run();
  };
  const handleFontSizeDecrement = () => {
    if (fontSize <= 1) return;
    setFontSize((prev) => (prev -= 1));
    editor.chain().focus().setFontSize(`${fontSize}px`).run();
  };

  useEffect(() => {
    const handleOnLineChange = () => {
      const value = getValueOnCursor({ editor, attributeType: "font-size" });
      if (value) {
        setFontSize(parseInt(value) + 1);
      }
    };
    editor.on("selectionUpdate", handleOnLineChange);

    return () => {
      editor.off("selectionUpdate", handleOnLineChange);
    };
  }, [editor]);

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={handleFontSizeDecrement}
        className="h-6 rounded p-1 hover:bg-primary hover:text-light"
      >
        <FaMinus />
      </button>
      <div className="flex h-6 w-10 items-center justify-center rounded border-2 border-primary bg-primary/10 text-center text-dark outline-primary focus-within:bg-primary/30">
        {fontSize}px
      </div>
      <button
        onClick={handleFontSizeIncrement}
        className="h-6 rounded p-1 hover:bg-primary hover:text-light"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default FontSizeController;

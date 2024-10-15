import React from "react";

// tools
import Undo from "./Tools/Undo";
import Redo from "./Tools/Redo";
import Heading from "./Tools/Heading";
import FontFamily from "./Tools/FontFamily";
import FontSizeController from "./Tools/FontSizeController";
import ImageUpload from "./Tools/ImageUpload";
import TextAlign from "./Tools/TextAlign";
import LineSpacing from "./Tools/LineSpacing";
import BulletList from "./Tools/BulletList";
import CodeBlock from "./Tools/CodeBlock";
import BubbleMenu from "./Tools/BubbleMenu";
import Color from "./Tools/Color";

interface ToolbarProps {
  editor: any;
}

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  return (
    <div className="flex items-center justify-center border-y-2 p-1 text-xs">
      <Undo editor={editor} />
      <Redo editor={editor} />
      <Heading editor={editor} />
      <FontFamily editor={editor} />
      <FontSizeController editor={editor} />
      <ImageUpload editor={editor} />
      <TextAlign editor={editor} />
      <LineSpacing editor={editor} />
      <BulletList editor={editor} />
      <CodeBlock editor={editor} />
      <BubbleMenu editor={editor} />
      <Color editor={editor} />
    </div>
  );
};

export default Toolbar;

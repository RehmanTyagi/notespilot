import React from "react";
import { ToolProps } from "@/types";
import { BubbleMenu as BubbleMenuComponent } from "@tiptap/react";
import { setAlert } from "../../../../store/alertSlice";
import { useDispatch } from "react-redux";

// icons
import {
  BiBold,
  BiItalic,
  BiStrikethrough,
  BiUnderline,
  BiHighlight,
  BiLink,
} from "react-icons/bi";

import ToolBtn from "../ToolBtn";
import Color from "./Color";
const BubbleMenu: React.FC<ToolProps> = ({ editor }) => {
  const dispatch = useDispatch();
  const toggleHighlight = () => {
    (editor.commands as any).toggleHighlight();
  };
  const toggleUnderline = () => {
    (editor.commands as any).toggleUnderline();
  };
  const addLink = () => {
    const link = window.prompt("Enter the URL");
    if (!link) return;
    const res = editor.commands.toggleLink({ href: link });
    if (res) {
      dispatch(setAlert({ message: "Link Added", type: "success" }));
    }
  };

  return (
    <BubbleMenuComponent
      editor={editor}
      className="flex rounded border-2 bg-white p-0.5"
    >
      <ToolBtn
        tooltipMsg="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <BiBold className="rounded bg-primary p-0.5 text-white" />
      </ToolBtn>
      <ToolBtn
        tooltipMsg="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <BiItalic className="rounded bg-primary p-0.5 text-white" />
      </ToolBtn>
      <ToolBtn
        tooltipMsg="Strike Through"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <BiStrikethrough />
      </ToolBtn>
      <ToolBtn tooltipMsg="Underline" onClick={toggleUnderline}>
        <BiUnderline />
      </ToolBtn>
      <ToolBtn tooltipMsg="highlight" onClick={toggleHighlight}>
        <BiHighlight />
      </ToolBtn>
      <ToolBtn tooltipMsg="Add Link" onClick={addLink}>
        <BiLink />
      </ToolBtn>
      <Color position="top-2/4 -translate-y-2/4 left-16" editor={editor} />
    </BubbleMenuComponent>
  );
};

export default BubbleMenu;

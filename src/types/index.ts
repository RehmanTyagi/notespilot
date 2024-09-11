import { Editor } from "@tiptap/core";

export interface Note {
  category: string;
  content: string;
  createdAt: string;
  description: string;
  title: string;
  updatedAt: string;
  user: string;
  _id: string;
}

export interface ToolProps {
  editor: Editor;
}

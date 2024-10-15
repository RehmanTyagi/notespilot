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

export interface User {
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  isEmailConfirmed: boolean;
  role: string;
  profilePicture: string;
}

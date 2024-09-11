import { useEditor, EditorContent } from "@tiptap/react";
import "./Editor.css";
import { useEffect } from "react";
import { useGetNoteQuery } from "../../../store/noteApiSlice";
import { useParams } from "react-router-dom";

// extensions
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import { StarterKit } from "@tiptap/starter-kit";
import { FontSize } from "tiptap-extension-font-size";
import { TextAlign } from "@tiptap/extension-text-align";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Image } from "./extensions/MyImageExtension";
import { LineSpacing } from "./extensions/LineSpacing";
import { Highlight } from "./extensions/Highlight";
import { Underline } from "./extensions/Underline";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { Color } from "@tiptap/extension-color";
import { createLowlight, all } from "lowlight";
import Header from "./Header";
import Toolbar from "./Toolbar";
import Link from "@tiptap/extension-link";
import Spinner from "../../common/Spinner";

const lowlight = createLowlight(all);

const NoteEditor = () => {
  const { noteid } = useParams<{ noteid: string }>();
  const { data: note, isError, isLoading } = useGetNoteQuery(noteid || "");
  console.log(note);

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "editor h-full p-10 overflow-y-scroll outline-none",
      },
    },
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "bullet-list",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "ordered-list",
          },
        },
        codeBlock: false,
      }),
      TextStyle,
      FontFamily,
      FontSize,
      Image,
      LineSpacing,
      Highlight,
      Underline,
      Color.configure({
        types: ["textStyle", "heading", "paragraph"],
      }),
      Link.configure({
        HTMLAttributes: {
          class: "external-link",
        },
      }),
      CodeBlockLowlight.configure({
        defaultLanguage: "plaintext",
        HTMLAttributes: {
          class: "code-block",
        },
        lowlight: lowlight,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        emptyEditorClass: "Editor__empty",
        emptyNodeClass: "Editor__placeholder",
        includeChildren: true,
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "Add a catchy title…";
          }
          if (node.type.name === "codeBlock") {
            return "Write your code…";
          }
          return "Write your paragraph… or Compose your thoughts…";
        },
      }),
    ],
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      console.log(content);
    },
  });

  useEffect(() => {
    if (editor && note?.data?.content) {
      editor.commands.setContent(note.data.content);
    }
  }, [editor, note]);

  if (isLoading) {
    return (
      <div className="grid place-content-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div
      className="grid h-full scale-95 grid-rows-[auto,auto,1fr] rounded-lg border-2 border-gray-200 shadow-md"
      role="editor container"
    >
      <Header note={note?.data || {}} />
      <Toolbar editor={editor} />
      <EditorContent className="overflow-y-scroll" editor={editor} />
    </div>
  );
};

export default NoteEditor;

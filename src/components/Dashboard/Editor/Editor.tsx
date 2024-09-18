import { useEditor, EditorContent } from "@tiptap/react";
import "./Editor.css";
import { useEffect, useCallback } from "react";
import {
  useUpdateNoteMutation,
  useGetNoteQuery,
} from "../../../store/noteApiSlice";
import { debounce } from "../../../utils/debounce";

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
import Link from "@tiptap/extension-link";

// components
import Header from "./Header";
import Toolbar from "./Toolbar";
import Spinner from "../../common/Spinner";
import { useParams } from "react-router-dom";

type noteParams = {
  noteid: string;
};

const lowlight = createLowlight(all);
const NoteEditor = () => {
  const [updateNote] = useUpdateNoteMutation();
  const { noteid } = useParams<noteParams>();
  const { data, isLoading, isError } = useGetNoteQuery(noteid);
  const note = data?.note;
  const debouncedUpdateNote = useCallback(
    debounce(async (content: string) => {
      try {
        const res = await updateNote({
          id: note?._id,
          note: { content },
        });
        console.log("Note updated successfully ", res);
      } catch (error) {
        console.log(error);
      }
    }, 5000),
    [note?._id],
  );

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
      Image.configure({
        allowBase64: true,
      }),
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
    onUpdate(props) {
      const content = props.editor.getHTML();
      debouncedUpdateNote(content);
    },
  });

  useEffect(() => {
    editor?.commands.setContent(note?.content || "");
  }, [note?.content, editor]);

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
      <Header note={note || {}} />
      <Toolbar editor={editor} />
      <EditorContent className="overflow-y-scroll" editor={editor} />
    </div>
  );
};

export default NoteEditor;

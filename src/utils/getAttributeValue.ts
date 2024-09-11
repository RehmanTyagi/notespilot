import { Editor } from "@tiptap/core";

interface getValueOnCursorParmeters {
  editor: Editor;
  attributeType: string;
}

export const getValueOnCursor = ({
  editor,
  attributeType,
}: getValueOnCursorParmeters): string | undefined => {
  if (!editor.isInitialized) return;

  const { state } = editor;
  const { selection } = state;
  const { $from } = selection;
  const node = editor.view.domAtPos($from.pos).node as HTMLElement;
  let resultedValue: string;

  if (node.nodeType === Node.TEXT_NODE) {
    resultedValue = window
      .getComputedStyle(node.parentElement as HTMLElement)
      .getPropertyValue(attributeType);
    return resultedValue;
  }
  if (node.nodeType === Node.ELEMENT_NODE) {
    resultedValue = window
      .getComputedStyle(node.children[0] ? node.children[0] : node)
      .getPropertyValue(attributeType);
    return resultedValue;
  }
};

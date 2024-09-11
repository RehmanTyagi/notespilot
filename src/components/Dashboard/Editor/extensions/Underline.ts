import { CommandProps, Mark, RawCommands } from "@tiptap/core";

export const Underline = Mark.create({
  name: "underline",

  renderHTML({ HTMLAttributes }) {
    return ["u", HTMLAttributes, 0];
  },

  addCommands() {
    return {
      toggleUnderline:
        () =>
        ({ commands }: CommandProps) => {
          return commands.toggleMark("underline");
        },
    } as Partial<RawCommands>;
  },
});

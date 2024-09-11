import { CommandProps, Mark, mergeAttributes, RawCommands } from "@tiptap/core";

export const Highlight = Mark.create({
  name: "highlight",

  // Add your custom attributes here
  addAttributes() {
    return {
      color: {
        default: "yellow",
        parseHTML: (element) => element.style.backgroundColor,
        renderHTML: (attributes) => {
          console.log(attributes);
          return {
            style: `background-color: ${attributes.color};`,
          };
        },
      },
    };
  },

  // Define how your mark will be rendered in HTML
  renderHTML({ HTMLAttributes }) {
    console.log(HTMLAttributes);
    return ["span", HTMLAttributes, 0];
  },

  addCommands() {
    return {
      toggleHighlight:
        () =>
        ({ commands }: CommandProps) => {
          return commands.toggleMark(this.name);
        },
    } as Partial<RawCommands>;
  },
});

export default Highlight;

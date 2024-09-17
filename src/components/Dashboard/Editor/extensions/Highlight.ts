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
          return {
            style: `background-color: ${attributes.color};`,
          };
        },
      },
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: ["textStyle"],
        attributes: {
          style: {
            default: null,
            parseHTML: (element) => element.style.backgroundColor || null,
            renderHTML: (attributes) => {
              if (!attributes.style) {
                return {};
              }
              return {
                style: `background-color: ${attributes.style}`,
              };
            },
          },
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
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

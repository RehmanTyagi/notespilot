import { Extension, CommandProps, RawCommands } from "@tiptap/core";

export const LineSpacing = Extension.create({
  name: "lineSpacing",

  addOptions() {
    return {
      defaultLineSpacing: "1.5",
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: ["paragraph", "heading"],
        attributes: {
          lineSpacing: {
            default: this.options.defaultLineSpacing,
            renderHTML: (attributes) => {
              return {
                style: `line-height: ${attributes.lineSpacing};`,
              };
            },
            parseHTML: (element) => {
              return (
                element.style.lineHeight || this.options.defaultLineSpacing
              );
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setLineSpacing:
        (value: string) =>
        ({ commands }: CommandProps): boolean => {
          return commands.updateAttributes("paragraph", {
            lineSpacing: value,
          });
        },
    } as Partial<RawCommands>;
  },
});

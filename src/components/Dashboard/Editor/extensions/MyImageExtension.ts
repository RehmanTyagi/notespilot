import { Image as TiptapImage } from "@tiptap/extension-image";

// Define the custom Image extension
export const Image = TiptapImage.extend({
  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: (element) => {
          return {
            src: element.getAttribute("src"),
          };
        },
      },
      width: {
        default: null,
        parseHTML: (element) => {
          return {
            width: element.style.width,
          };
        },
      },
      height: {
        default: 400,
        parseHTML: (element) => {
          return {
            height: element.style.height,
          };
        },
      },
      align: {
        default: "center",
      },
    };
  },

  addNodeView() {
    return ({ node, editor }) => {
      const img = document.createElement("img");
      img.src = node.attrs.src;
      img.style.width = node.attrs.width + "px";
      img.style.height = node.attrs.height + "px";

      const onMouseDown = (event: MouseEvent) => {
        event.preventDefault();
        const startX = event.pageX;
        const startY = event.pageY;
        const startWidth = img.clientWidth;
        const startHeight = img.clientHeight;

        const onMouseMove = (moveEvent: MouseEvent) => {
          const width = startWidth + (moveEvent.pageX - startX);
          const height = startHeight + (moveEvent.pageY - startY);
          img.style.width = `${width}px`;
          img.style.height = `${height}px`;

          editor.commands.updateAttributes(node.type.name, {
            ...node.attrs,
            width: width,
            height: height,
          });
        };

        const onMouseUp = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      };

      const resizehandler = document.createElement("div");
      resizehandler.classList.add("resize-handle");
      resizehandler.addEventListener("mousedown", onMouseDown);

      const container = document.createElement("div");
      container.style.width = "100%";
      container.style.display = "flex";
      container.style.justifyContent = node.attrs.align;

      // Add image alignment menu (left, center, right)
      const alignMenu = document.createElement("div");
      alignMenu.classList.add("align-image-menu");
      ["left", "center", "right"].forEach((opt) => {
        const alignBtn = document.createElement("button");
        alignBtn.textContent = opt;
        alignBtn.classList.add("align-image-button", opt);

        alignBtn.addEventListener("click", (event) => {
          const target = event.target as HTMLButtonElement;
          if (target.innerHTML === "left") {
            editor.commands.updateAttributes(node.type.name, { align: "left" });
          }
          if (target.innerHTML === "center") {
            editor.commands.updateAttributes(node.type.name, {
              align: "center",
            });
          }
          if (target.innerHTML === "right") {
            editor.commands.updateAttributes(node.type.name, {
              align: "right",
            });
          }
        });
        alignMenu.appendChild(alignBtn);
      });

      const wrapper = document.createElement("div");
      wrapper.classList.add("image-wrapper");
      wrapper.append(img, resizehandler, alignMenu);

      container.appendChild(wrapper);

      return {
        dom: container,
      };
    };
  },
});

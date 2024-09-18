export const countElement = (content: string, elementType: string) => {
  const element = document.createElement("div");
  element.innerHTML = content;
  const totalElements = element.querySelectorAll(elementType).length;
  return totalElements;
};

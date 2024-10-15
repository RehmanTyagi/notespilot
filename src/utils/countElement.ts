export const countElement = (content: string, elementType: string) => {
  const element = document.createElement("div");
  element.innerHTML = content;
  const totalElements = element.querySelectorAll(elementType).length;
  return totalElements;
};

export const countWords = (content: string) => {
  const words = document.createElement("div");
  words.innerHTML = content;
  const textEl = words.querySelectorAll("p");
  let totalWords = 0;

  textEl.forEach((el) => {
    const count = el.textContent?.split(" ").length;
    totalWords += count || 0;
  });

  return totalWords;
};

export const countParagraphs = (content: string) => {
  const paragraphs = document.createElement("div");
  paragraphs.innerHTML = content;
  const totalParaEl = paragraphs.querySelectorAll("p");
  let count = 0;

  totalParaEl.forEach((para) => {
    if (para.textContent && para.textContent?.length > 50) {
      count += 1;
    }
  });

  return count;
};

export const countReadTime = (content: string) => {
  const words = countWords(content);
  const readTime = Math.ceil(words / 200);
  return readTime;
};

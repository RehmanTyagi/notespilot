export function compressBase64Image(base64Str: string, quality: number = 0.5) {
  return new Promise((resolve) => {
    const img = base64ToImage(base64Str);
    img.onload = () => {
      const canvas = drawImageOnCanvas(img);
      const compressedBase64 = canvasToBase64(canvas, quality);
      resolve(compressedBase64);
    };
  });
}

function drawImageOnCanvas(img: HTMLImageElement) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = img.height;
  canvas.width = img.width;

  ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

  return canvas;
}
function base64ToImage(base64: string) {
  const image = new Image();
  image.src = base64;
  return image;
}
function canvasToBase64(canvas: HTMLCanvasElement, quality: number) {
  return canvas.toDataURL("image/jpeg", quality);
}

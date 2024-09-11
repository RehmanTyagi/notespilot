import React from "react";
import { ToolProps } from "@/types";
import { MdOutlineImage } from "react-icons/md";
import ToolBtn from "../ToolBtn";
import { compressBase64Image } from "../../../../utils/imageCompressor";

const ImageUpload: React.FC<ToolProps> = ({ editor }) => {
  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.onchange = async (e) => {
      try {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) throw new Error("file is required to upload");
        const filePath = (await convertToBase64(file)) as string;
        const compressedImg = (await compressBase64Image(filePath)) as string;
        editor.chain().focus().setImage({ src: compressedImg }).run();
      } catch (error) {
        console.log(error);
      }
    };
  };

  function convertToBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  return (
    <ToolBtn tooltipMsg="Upload Image" onClick={handleImageUpload}>
      <MdOutlineImage size={15} />
    </ToolBtn>
  );
};

export default ImageUpload;

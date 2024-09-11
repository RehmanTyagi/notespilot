import React from "react";
import ChatBot from "./ChatBot/ChatBot";

import { MdOutlineCategory, MdEdit } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";

import {
  LiaImage,
  LiaLinkSolid,
  LiaFileAltSolid,
  LiaParagraphSolid,
  LiaFileWord,
  LiaClockSolid,
} from "react-icons/lia";

const RightSidePanel = () => {
  const [category, setChangeCategory] = React.useState("Personal");
  const [categoryIsReadOnly, setCategoryIsReadOnly] = React.useState(true);
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeCategory(e.target.value);
  };

  const handleEditCategory = () => {
    setCategoryIsReadOnly(!categoryIsReadOnly);
  };

  const resizer = document.querySelector(".resizer");
  const resizablePanel = document.querySelector(".resizable-panel");

  const handlePanelResize = () => {
    let startX: number;
    let startWidth: number;
  };
  return (
    <div className="relative flex h-full flex-col border-l-2">
      {/* <div role="resizer" className="absolute h-full w-10 bg-red-400"></div> */}
      <div className="flex items-center gap-2 border-b-2 p-4">
        <MdOutlineCategory size={20} className="self-start" />
        <div className="flex flex-col gap-1.5">
          <input
            onChange={handleChangeCategory}
            type="text"
            readOnly={categoryIsReadOnly}
            value={category}
            className="font-semibold outline-none"
          />
          <p className="flex gap-1 text-xs">
            Last Saved:<span>21,Mar,2024 10:20PM</span>
          </p>
        </div>
        <MdEdit onClick={handleEditCategory} className="ml-auto text-xl" />
      </div>
      <div className="border-b-2">
        <div className="flex items-center justify-between p-2 px-4 text-sm font-bold">
          <p>Insights</p>
          {isMenuOpen ? (
            <FaMinus onClick={() => setIsMenuOpen(!isMenuOpen)} />
          ) : (
            <FaPlus onClick={() => setIsMenuOpen(!isMenuOpen)} />
          )}
        </div>
        {isMenuOpen && (
          <div role="dropdown">
            <div className="flex flex-col gap-5 p-5">
              <div className="flex items-center gap-4">
                <LiaImage size={20} />
                <p className="text-sm font-medium">100 photos</p>
              </div>
              <div className="flex items-center gap-4">
                <LiaLinkSolid size={20} />
                <p className="text-sm font-medium">21 links</p>
              </div>
              <div className="flex items-center gap-4">
                <LiaFileAltSolid size={20} />
                <p className="text-sm font-medium">1000 words</p>
              </div>
              <div className="flex items-center gap-4">
                <LiaFileWord size={20} />
                <p className="text-sm font-medium">2000 characters</p>
              </div>
              <div className="flex items-center gap-4">
                <LiaParagraphSolid size={20} />
                <p className="text-sm font-medium">55 Paragraph's</p>
              </div>
              <div className="flex items-center gap-4">
                <LiaClockSolid size={20} />
                <p className="text-sm font-medium">9m 15s read time</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <ChatBot />
    </div>
  );
};

export default RightSidePanel;

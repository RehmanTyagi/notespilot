import React, { useEffect, useState } from "react";
import ChatBot from "./ChatBot/ChatBot";
import { MdOutlineCategory } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useAppSelector } from "../../hooks/appStateSelector";
import { useUpdateNoteMutation } from "../../store/noteApiSlice";
import { countElement } from "../../utils/countElement";

import {
  LiaImage,
  LiaLinkSolid,
  LiaFileAltSolid,
  LiaParagraphSolid,
  LiaFileWord,
  LiaClockSolid,
} from "react-icons/lia";

const RightSidePanel = () => {
  const { note } = useAppSelector((state) => state.currentNote);
  const [category, setCategory] = useState("General");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [updateNote] = useUpdateNoteMutation();

  const handleChangeCategory = async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    try {
      const res = await updateNote({
        id: note?._id,
        note: { category: e.target.value },
      });
      console.log("Note updated successfully ", res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCategory(note?.category || "General");
  }, [note]);

  return (
    <div className="relative flex h-full flex-col border-l-2">
      <div className="flex items-center gap-2 border-b-2 p-4">
        <MdOutlineCategory size={20} className="self-start" />
        <select
          value={category}
          className="flex-grow rounded-sm p-0.5 text-sm font-medium focus:outline-none"
          onChange={handleChangeCategory}
        >
          <option>General</option>
          <option>Work</option>
          <option>Personal</option>
          <option>Archive</option>
          <option>Study</option>
        </select>
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
                <p className="text-sm font-medium">
                  {note ? countElement(note.content, "img") : "0"} img
                </p>
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

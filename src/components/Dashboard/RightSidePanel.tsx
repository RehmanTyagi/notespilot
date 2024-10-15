import React, { useEffect, useState } from "react";
import ChatBot from "./ChatBot/ChatBot";
import { MdOutlineCategory } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useAppSelector } from "../../hooks/appStateSelector";
import { useUpdateNoteMutation } from "../../store/noteApiSlice";
import {
  countElement,
  countWords,
  countParagraphs,
  countReadTime,
} from "../../utils/countElement";

import {
  LiaImage,
  LiaLinkSolid,
  LiaFileAltSolid,
  LiaParagraphSolid,
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
      setCategory(e.target.value);
      if (!note) return;
      await updateNote({
        id: note?._id,
        note: { category: e.target.value },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCategory(note?.category || "General");
  }, [note]);

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white dark:bg-slate-700">
      <div className="flex items-center gap-2 border-b-2 p-4">
        <MdOutlineCategory
          size={20}
          className="self-start dark:text-gray-300"
        />
        <select
          value={category}
          className="flex-grow rounded-sm bg-transparent text-sm font-medium focus:outline-none dark:text-gray-300"
          onChange={handleChangeCategory}
        >
          <option className="text-gray-600">General</option>
          <option className="text-gray-600">Work</option>
          <option className="text-gray-600">Personal</option>
          <option className="text-gray-600">Archive</option>
          <option className="text-gray-600">Study</option>
        </select>
      </div>
      <div className="border-b-2 dark:text-gray-300">
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex cursor-pointer items-center justify-between p-2 px-4"
        >
          <p className="text-xs font-bold">Note Insights</p>
          {isMenuOpen ? <FaMinus /> : <FaPlus />}
        </div>
        {isMenuOpen && (
          <div role="dropdown">
            <div className="flex flex-col gap-5 p-5">
              <div className="flex items-center gap-4">
                <LiaImage size={20} />
                <p className="text-xs">
                  {note ? countElement(note.content, "img") : "0"} Photos
                </p>
              </div>
              <div className="flex items-center gap-4">
                <LiaLinkSolid size={20} />
                <p className="text-xs">
                  {note ? countElement(note.content, "a") : "0"} Links
                </p>
              </div>
              <div className="flex items-center gap-4">
                <LiaFileAltSolid size={20} />
                <p className="text-xs">
                  {note ? countWords(note.content) : "0"} Words
                </p>
              </div>
              <div className="flex items-center gap-4">
                <LiaParagraphSolid size={20} />
                <p className="text-xs">
                  {note ? countParagraphs(note.content) : "0"} Paragraphs
                </p>
              </div>
              <div className="flex items-center gap-4">
                <LiaClockSolid size={20} />
                <p className="text-xs">
                  {note ? countReadTime(note.content) : "0"} min read time
                </p>
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

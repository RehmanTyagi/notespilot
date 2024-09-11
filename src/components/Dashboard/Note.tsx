import React from "react";
import { Link } from "react-router-dom";
import { Note as NoteType } from "@/types";
import { formatDate } from "../../utils/formatDate";

type NoteProps = Pick<NoteType, "title" | "updatedAt" | "createdAt" | "_id">;

const Note: React.FC<NoteProps> = ({ title, updatedAt, createdAt, _id }) => {
  return (
    <Link to={`note/${_id}`}>
      <div className="flex cursor-pointer items-center justify-between gap-1.5 border-b-2 p-4 hover:bg-white">
        <div>
          <h1 className="font-bold">{title}</h1>
          <p className="text-xs">
            this is description of this note, it is brief.
          </p>
        </div>
        <img
          className="row-span-2 h-16 w-20 rounded-md"
          src="imgs/laptop.jpg"
        />
      </div>
    </Link>
  );
};

export default Note;

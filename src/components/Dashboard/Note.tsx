import React from "react";
import { Link, useParams } from "react-router-dom";
import { Note as NoteType } from "@/types";

type NoteProps = Pick<
  NoteType,
  "title" | "updatedAt" | "createdAt" | "_id" | "description"
>;

const Note: React.FC<NoteProps> = ({ title, _id: id, description }) => {
  const { noteid: activeId } = useParams();
  return (
    <Link to={`note/${id}`}>
      <div
        className={`${activeId === id ? "rounded-md bg-primary text-white" : ""} flex cursor-pointer items-center justify-between gap-1.5 border-b-2 p-4 ${activeId !== id ? "hover:bg-primary/10" : ""}`}
      >
        <div>
          <h1 className="font-bold">{title ? title : "Untitled"}</h1>
          <p className="text-xs">
            {description ? description : "a brief description of the note"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Note;

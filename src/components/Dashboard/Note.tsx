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
        className={`${activeId === id ? "border-2 border-primary bg-primary/10 dark:!bg-slate-800" : ""} flex cursor-pointer flex-col gap-2 border-2 p-4 dark:border-slate-500 dark:bg-slate-600 dark:text-gray-300`}
      >
        <h1 className="text-sm font-bold">{title ? title : "Untitled"}</h1>
        <p className="text-xs">
          {description ? description : "a brief description of the note"}
        </p>
      </div>
    </Link>
  );
};

export default Note;

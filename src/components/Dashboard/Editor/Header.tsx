import { SlOptionsVertical } from "react-icons/sl";
import { Note } from "@/types";
import React, { useState, useCallback, useEffect } from "react";
import {
  useDeleteNoteMutation,
  useUpdateNoteMutation,
} from "../../../store/noteApiSlice";
import Dropdown from "../../common/Dropdown";
import { useNavigate } from "react-router-dom";
import { setAlert } from "../../../store/alertSlice";
import { useDispatch } from "react-redux";
import Input from "../../common/Input";
import { debounce } from "../../../utils/debounce";
import Button from "../../common/Button";
import { MdOutlineDelete } from "react-icons/md";

interface HeaderProps {
  note: Partial<Note>;
}

const Header: React.FC<HeaderProps> = ({ note }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteNote, { isLoading }] = useDeleteNoteMutation();
  const [updateNote] = useUpdateNoteMutation();
  const [TitleAndDescription, setTitleAndDescription] = useState({
    title: "",
    description: "",
  });
  const handleUpdate = useCallback(
    debounce(async (id: string, title: string, description: string) => {
      try {
        await updateNote({
          id,
          note: { title, description },
        });
      } catch (error) {
        dispatch(
          setAlert({
            message: "title could not be updated",
            type: "error",
          }),
        );
      }
    }, 3000),
    [updateNote, dispatch],
  );

  const handleDelete = async () => {
    try {
      await deleteNote(note._id).unwrap();
      dispatch(setAlert({ message: "Note deleted", type: "success" }));
      navigate("/view", { replace: true });
    } catch (error) {
      dispatch(setAlert({ message: "Failed to delete note", type: "error" }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = e.target;
    const type = dataset.type as string;

    setTitleAndDescription((prev) => {
      const updatedState = { ...prev, [type]: value };
      handleUpdate(note._id, updatedState.title, updatedState.description);
      return updatedState;
    });
  };

  useEffect(() => {
    setTitleAndDescription({
      title: note.title,
      description: note.description,
    });
  }, [note]);

  return (
    <div className="flex justify-between p-2 md:p-4">
      <div className="flex flex-grow flex-col gap-1">
        <Input
          data-type="title"
          className="border-none bg-transparent !p-0.5 text-xl font-semibold"
          value={TitleAndDescription.title}
          onChange={handleChange}
          type="text"
          placeholder="Note Title"
        />
        <Input
          data-type="description"
          className="text-dark/50 border-none bg-transparent !p-0.5 !text-sm font-medium md:text-base"
          value={TitleAndDescription.description}
          onChange={handleChange}
          type="text"
          placeholder="Note Description"
        />
      </div>
      <div className="text-dark flex h-fit gap-4">
        <Dropdown>
          <Dropdown.DropdownButton isIcon={false}>
            <SlOptionsVertical className="relative top-[1.5px] cursor-pointer" />
          </Dropdown.DropdownButton>
          <Dropdown.DropdownMenu className="right-0 !p-0">
            <Button
              isLoading={isLoading}
              onClick={handleDelete}
              type="button"
              className="gap-1 border-none"
            >
              <MdOutlineDelete size={18} />
              <span>Delete</span>
            </Button>
          </Dropdown.DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;

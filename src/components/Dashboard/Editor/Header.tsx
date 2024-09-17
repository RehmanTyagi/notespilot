import { SlOptionsVertical } from "react-icons/sl";
import { Note } from "@/types";
import React, { useState, useCallback, useEffect } from "react";
import {
  useDeleteNoteMutation,
  useUpdateNoteMutation,
} from "../../../store/noteApiSlice";
import Dropdown from "../../common/Dropdown";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Spinner from "../../common/Spinner";
import { setAlert } from "../../../store/alertSlice";
import { useDispatch } from "react-redux";
import Input from "../../common/Input";
import { debounce } from "../../../utils/debounce";
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
          className="border-none !p-0 text-xl font-semibold"
          value={TitleAndDescription.title}
          onChange={handleChange}
          type="text"
          placeholder="Note Title"
        />
        <Input
          data-type="description"
          className="border-none !p-0 text-xs font-bold text-dark/50 md:text-base"
          value={TitleAndDescription.description}
          onChange={handleChange}
          type="text"
          placeholder="Note Description"
        />
      </div>
      <div className="flex h-fit gap-4 text-dark">
        <Dropdown>
          <Dropdown.DropdownButton isIcon={false}>
            <SlOptionsVertical className="relative top-[1.5px] cursor-pointer" />
          </Dropdown.DropdownButton>
          <Dropdown.DropdownMenu className="right-0 !p-0">
            <div
              onClick={handleDelete}
              className="flex cursor-pointer items-center gap-1 p-1 text-sm hover:bg-gray-100"
            >
              {isLoading ? (
                <Spinner className="!h-6 !w-6" />
              ) : (
                <>
                  <MdDeleteOutline size={20} /> Delete
                </>
              )}
            </div>
          </Dropdown.DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;

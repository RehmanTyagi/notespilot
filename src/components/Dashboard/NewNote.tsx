import Button from "../common/Button";
import { IoCreateSharp } from "react-icons/io5";
import { useAddNoteMutation } from "../../store/noteApiSlice";
import { setAlert } from "../../store/alertSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewNote = () => {
  const [addNote, { isLoading }] = useAddNoteMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddNote = async () => {
    try {
      const res = await addNote({
        title: "Untitled",
        content: "<p>Start writing your note here...</p>",
        description: "this is a new note",
        category: "General",
      });
      dispatch(
        setAlert({ type: "success", message: "Note created successfully!" }),
      );
      navigate(`/view/note/${res.data.note._id}`);
    } catch (err) {
      dispatch(setAlert({ type: "error", message: "Failed to create note" }));
    }
  };

  return (
    <Button
      onClick={handleAddNote}
      isDisabled={isLoading}
      isLoading={isLoading}
      type="button"
      className="mt-5 flex items-center gap-1.5"
    >
      <IoCreateSharp />
      New Note
    </Button>
  );
};

export default NewNote;

import { FiSearch } from "react-icons/fi";
import Input from "../common/Input";
import Button from "../common/Button";
import { IoClose } from "react-icons/io5";
import { useGetNotesQuery } from "../../store/noteApiSlice";
import { formatDate } from "../../utils/formatDate";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegFileAlt } from "react-icons/fa";
import Spinner from "../common/Spinner";
import Note from "./Note";
import { debounce } from "../../utils/debounce";
import { RiArrowRightSLine } from "react-icons/ri";
import Dropdown from "../common/Dropdown";
import NewNote from "./NewNote";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentNote } from "../../store/currentNoteSlice";
import { IoFilterSharp } from "react-icons/io5";

const LeftSidePanel = () => {
  const { noteid } = useParams<{ noteid: string }>();
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");
  const [filterByDate, setFilterByDate] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [filterByCategory, setFilterByCategory] = useState<string>("");
  const { data, isFetching, isError, refetch } = useGetNotesQuery({
    query: search,
    filter: filterByDate ? formatDate(filterByDate) : filterByCategory || "",
  });
  const notes = data?.results ?? [];
  const debouncedSearch = debounce((query: string) => {
    setSearch(query);
  }, 1000);

  const handleQuerySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  const handleFilterByDate = (date: Date | null) => {
    setFilterByDate(date?.toString() || "");
  };
  const handleFilterByCategory = (event: React.MouseEvent) => {
    const category = (event.target as HTMLDivElement).dataset.category;
    setFilterByDate("");
    setFilterByCategory(category || "");
  };
  const handleClearFilter = () => {
    setFilterByDate("");
    setFilterByCategory("");
  };
  const handleRefetch = () => {
    refetch();
  };

  useEffect(() => {
    const activeNote = notes.find((note) => note._id === noteid);
    if (activeNote) {
      dispatch(setCurrentNote(activeNote));
    }
  }, [noteid, notes, dispatch]);

  return (
    <div className="relative row-span-full rounded-lg bg-white text-gray-500 dark:bg-slate-700">
      <div className="flex h-full w-72 flex-col p-3">
        <div className="bg-dark/5 flex items-center gap-2 rounded-md border-2 border-primary pl-1.5">
          <FiSearch
            className="cursor-pointer text-lg text-primary"
            strokeWidth={4}
          />
          <Input
            onChange={handleQuerySearch}
            type="text"
            className="border-none bg-transparent py-2 font-medium focus:!ring-0 dark:text-primary"
            placeholder="Search"
          />
        </div>
        <NewNote />
        <div className="my-5 flex items-center justify-between dark:text-gray-300">
          <div className="flex items-center gap-0.5">
            <FaRegFileAlt />
            <p className="text-sm font-semibold">
              {notes.length > 0 ? notes.length : 0}
            </p>
          </div>
          <Dropdown className="hover:bg-transparent">
            <Dropdown.DropdownButton className="!p-0" isIcon={false}>
              <Button type="button" className="h-8">
                {filterByCategory || filterByDate ? (
                  <IoClose onClick={handleClearFilter} size={20} />
                ) : (
                  <span className="flex items-center gap-1">
                    <IoFilterSharp />
                    Filter
                  </span>
                )}
              </Button>
            </Dropdown.DropdownButton>
            <Dropdown.DropdownMenu className="right-0 top-12 flex flex-col gap-2 bg-white text-sm dark:bg-slate-700">
              <DatePicker
                open={true}
                wrapperClassName="rounded w-full"
                selected={filterByDate ? new Date(filterByDate) : null}
                onChange={handleFilterByDate}
                className="hidden"
              />
              {["General", "Personal", "Work", "Archive", "Study"].map(
                (category) =>
                  (
                    <div
                      key={category}
                      data-category={category}
                      onClick={handleFilterByCategory}
                      className={`${category === filterByCategory ? "!bg-primary !text-white" : ""} text-dark/50 cursor-pointer rounded bg-gray-200/60 p-1.5 text-sm font-bold dark:bg-gray-300 dark:text-gray-700`}
                    >
                      {category}
                    </div>
                  ) as any,
              )}
            </Dropdown.DropdownMenu>
          </Dropdown>
        </div>
        <div className="relative flex flex-grow flex-col gap-2 overflow-y-auto [mask-image:linear-gradient(to_bottom,transparent,white_0%,gray_95%,transparent)]">
          {isFetching && (
            <div className="grid h-full place-content-center">
              <Spinner className="!h-20 !w-20 border-primary" />
            </div>
          )}
          {isError && (
            <div className="grid justify-items-center gap-10 p-10">
              <p className="dark:text-gray-300">Error loading notes.</p>
              <img src="/vectors/not-found.svg" />
              <Button
                onClick={handleRefetch}
                className="dark:text-gray-300"
                type="button"
              >
                Try Again
              </Button>
            </div>
          )}
          {notes &&
            notes.length > 0 &&
            notes.map((note, index) => (
              <Note
                key={index}
                title={note.title}
                _id={note._id}
                createdAt={note.createdAt}
                updatedAt={note.updatedAt}
                description={note.description}
              />
            ))}
          {notes.length === 0 && !isFetching && !isError && (
            <p>No notes found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSidePanel;

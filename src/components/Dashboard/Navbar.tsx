import Dropdown from "../common/Dropdown";
import ProfilePicture from "./ProfilePicture";
import { useGetUserQuery } from "../../store/userApiSlice";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import noteApiSlice from "../../store/noteApiSlice";
import DarkMode from "../common/DarkMode";

const Navbar = () => {
  const { data } = useGetUserQuery();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(noteApiSlice.util.resetApiState());
    dispatch(logout());
  };

  return (
    <div className="flex items-center justify-between rounded-lg pl-4">
      <h1 className="font-semibold text-primary">NotesPilot inc</h1>
      <div className="flex items-center gap-2">
        <DarkMode />
        <Dropdown>
          <Dropdown.DropdownButton isIcon={false}>
            <ProfilePicture
              profileUrl={data?.user?.profilePicture}
              className="h-8 w-8 rounded-full"
            />
          </Dropdown.DropdownButton>
          <Dropdown.DropdownMenu className="right-0 flex flex-col gap-2 dark:text-gray-300">
            <Link to="/view/profile" className="flex items-center gap-2">
              <CgProfile /> <span>Profile</span>
            </Link>
            <Link
              to="#"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <IoLogOutOutline /> <span>Logout</span>
            </Link>
          </Dropdown.DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;

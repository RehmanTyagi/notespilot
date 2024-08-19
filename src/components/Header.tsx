import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import LinkBtn from "./common/LinkBtn";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white sm:bg-transparent px-4 md:flex md:flex-row md:justify-between md:py-2">
      <div className="flex sm:text-dark items-center justify-between py-4">
        <h1 className="text-lg font-semibold">NotesPilot</h1>
        <div onClick={handleMenu}>
          {isOpen ? (
            <IoClose strokeWidth={3} size={20} className="md:hidden" />
          ) : (
            <HiOutlineMenuAlt4
              strokeWidth={3}
              size={20}
              className="md:hidden"
            />
          )}
        </div>
      </div>
      <div
        className={`${isOpen ? "h-72 overflow-y-hidden" : "h-0 overflow-hidden"} flex flex-col gap-4 transition-all duration-500 md:h-auto md:flex-1 md:flex-row md:items-center`}
      >
        <ul className="group md:text-dark flex flex-col gap-5 rounded bg-slate-100 p-4 font-bold capitalize text-default-alter md:flex-none md:grow md:flex-row md:justify-center md:gap-10 md:bg-transparent">
          <li>
            <Link className="text-primary group-hover:text-default" to="">
              Features
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary" to="">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary" to="">
              Our Story
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary" to="">
              Careers
            </Link>
          </li>
        </ul>
        <LinkBtn to="login">Login</LinkBtn>
      </div>
    </div>
  );
};

export default Header;

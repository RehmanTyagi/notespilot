import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import LinkBtn from "./common/LinkBtn";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        headerRef.current?.classList.add("-translate-y-full");
        if (
          window.scrollY > headerRef.current!.nextElementSibling!.clientHeight
        ) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        headerRef.current?.classList.remove("-translate-y-full");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; // cleanup
  }, []);

  return (
    <div
      ref={headerRef}
      className={`${isScrolled ? "fixed left-0 top-0 z-20 w-full translate-y-0 md:bg-white" : ""} bg-white px-4 transition-all md:flex md:flex-row md:justify-between md:bg-transparent md:py-2`}
    >
      <div className="flex items-center justify-between py-4 sm:text-dark">
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
        <ul className="text-default-alter group flex flex-col gap-5 rounded bg-slate-100 p-4 font-medium capitalize md:flex-none md:grow md:flex-row md:justify-center md:gap-10 md:bg-transparent md:text-dark">
          <li>
            <Link className="group-hover:text-default text-primary" to="">
              Why NotesPilot
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary" to="">
              Solutions
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

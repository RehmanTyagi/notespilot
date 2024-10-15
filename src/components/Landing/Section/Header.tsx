import { useState } from "react";
import Button from "../../common/Button";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex items-center justify-between p-4 backdrop:blur-sm">
      <div className="relative font-bold text-primary">
        <p className="text-2xl">NotesPilot</p>
        <p className="absolute -bottom-2.5 right-0 text-[11px]">
          Study Effectively
        </p>
      </div>
      <div onClick={() => setShowMenu(!showMenu)} className="md:hidden">
        {showMenu ? (
          <MdClose className="text-3xl" />
        ) : (
          <MdMenu className="text-3xl" />
        )}
      </div>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className={`${showMenu ? "block" : "hidden"} absolute left-0 top-0 h-dvh w-dvw bg-black/60`}
      ></div>
      <div
        className={`${showMenu ? "translate-x-0" : "-translate-x-full"} absolute left-0 top-0 flex h-dvh w-4/5 flex-col gap-8 bg-white p-10 text-2xl tracking-tight transition-transform duration-300 md:relative md:h-auto md:w-auto md:transform-none md:flex-row md:items-center md:gap-10 md:p-0 md:text-base`}
      >
        <a href="#about" className="hover:text-primary">
          About
        </a>
        <a href="#services" className="hover:text-primary">
          Services
        </a>
        <a href="#contact" className="hover:text-primary">
          Pricing
        </a>
        <a href="#contact" className="hover:text-primary">
          Technical support
        </a>
        <Button className="md:w-fit" type="button">
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}

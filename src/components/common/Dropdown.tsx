import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  createContext,
  ReactNode,
  FC,
} from "react";
import { IoMdArrowDropdown } from "react-icons/io";

// Define the context type
interface DropdownContextType {
  isOpen: boolean;
  handleOpenDropdown: () => void;
}

const dropdownContext = createContext<DropdownContextType | undefined>(
  undefined,
);

type DropdownProps = {
  children: ReactNode;
  className?: string;
};

const Dropdown: FC<DropdownProps> & {
  DropdownMenu: FC<DropdownMenuProps>;
  DropdownButton: FC<DropdownBtnProps>;
} = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOpenDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  return (
    <dropdownContext.Provider value={{ isOpen, handleOpenDropdown }}>
      <div
        className={`${className ? className : ""} relative rounded hover:bg-primary/10`}
        ref={dropdownRef}
      >
        {children}
      </div>
    </dropdownContext.Provider>
  );
};

type DropdownBtnProps = {
  children: React.ReactNode;
  isIcon?: boolean;
  iconSize?: number;
  className?: string;
};
const DropdownButton: FC<DropdownBtnProps> = ({
  children,
  isIcon = true,
  iconSize = 20,
  className,
}) => {
  const context = useContext(dropdownContext);

  if (!context) {
    throw new Error("Dropdown btn can be used inside of dropdown");
  }

  const { handleOpenDropdown } = context;

  return (
    <div
      className={`${className} flex cursor-pointer items-center gap-1 p-1.5`}
      onClick={handleOpenDropdown}
    >
      {children}
      {isIcon ? <IoMdArrowDropdown size={iconSize} /> : null}
    </div>
  );
};

type DropdownMenuProps = {
  children: ReactNode;
  className?: string;
};

const DropdownMenu: FC<DropdownMenuProps> = ({ children, className }) => {
  const context = useContext(dropdownContext);

  if (!context) {
    throw new Error("DropdownMenu must be used within a Dropdown");
  }

  const { isOpen } = context;

  return (
    <div
      className={`${className ? className : ""} ${
        isOpen ? "block" : "hidden"
      } bg-light text-dark absolute z-10 w-max rounded-md border-2 bg-white p-2 dark:bg-slate-600`}
    >
      {children}
    </div>
  );
};

Dropdown.DropdownMenu = DropdownMenu;
Dropdown.DropdownButton = DropdownButton;

export default Dropdown;

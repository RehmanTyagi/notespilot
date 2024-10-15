import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleThemeChange = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    switch (theme) {
      case "light":
        document.documentElement.classList.remove("dark");
        break;
      case "dark":
        document.documentElement.classList.add("dark");
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <div
      onClick={handleThemeChange}
      className="cursor-pointer rounded-full bg-slate-200 p-1 dark:text-black"
    >
      {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
    </div>
  );
};

export default DarkMode;

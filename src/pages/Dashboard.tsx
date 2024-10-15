import Navbar from "../components/Dashboard/Navbar";
import LeftSidePanel from "../components/Dashboard/LeftSidePanel";
import RightSidePanel from "../components/Dashboard/RightSidePanel";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  if (width < 1100) {
    return (
      <div className="grid h-dvh place-content-center">
        <div className="flex max-w-[400px] flex-col gap-1 p-4 text-center">
          <img alt="image" src="/vectors/unsupport-device.svg" />
          <h1 className="mb-2 mt-5 text-xl font-bold text-red-500">
            Device Not Supported 📵
          </h1>
          <p className="text-sm tracking-tight text-gray-700">
            Your device does not support viewport to use NotesPilot, switch to
            larger screen device.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[auto,1fr,auto] grid-rows-[6dvh,90dvh] gap-2 bg-gray-100 p-2.5 dark:bg-slate-800">
      <Navbar />
      <LeftSidePanel />
      <div className="row-span-full">
        <Outlet />
      </div>
      <RightSidePanel />
    </div>
  );
};

export default Dashboard;

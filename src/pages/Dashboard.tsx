import Sidebar from "../components/Dashboard/Sidebar";
import LeftSidePanel from "../components/Dashboard/LeftSidePanel";
import RightSidePanel from "../components/Dashboard/RightSidePanel";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="grid grid-rows-[90dvh,auto] bg-light md:grid md:h-dvh md:grid-cols-[auto,auto,1fr,300px] md:grid-rows-1">
      <Sidebar />
      <LeftSidePanel />
      <Outlet />
      <RightSidePanel />
    </div>
  );
};

export default Dashboard;

import { useEffect } from "react";

import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { clearAlert } from "../store/alertSlice";
import { useDispatch } from "react-redux";
import { AlertState } from "./StateInterface";
const Notification = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state: AlertState) => state.alert);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearAlert());
    }, alert.alertExpires);
    return () => clearTimeout(timer);
  }, [dispatch, alert, alert.alertExpires]);

  return (
    <div
      className={`duration-400 fixed flex items-center justify-center transition-transform ${
        alert.message ? "translate-y-0" : "-translate-y-full"
      } ${alert.type === "error" ? "bg-red-500" : "bg-primary"} w-full p-1.5 text-center text-white`}
    >
      <div className="w-full text-sm">{alert.message}</div>
      <IoClose
        onClick={() => dispatch(clearAlert())}
        className="cursor-pointer bg-gray-300/50 hover:bg-primary"
      />
    </div>
  );
};

export default Notification;

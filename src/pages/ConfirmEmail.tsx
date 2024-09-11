import { useVerifyEmailQuery } from "../store/authApiSlice";
import Spinner from "../components/common/Spinner";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const ConfirmEmail = () => {
  const search = new URLSearchParams(location.search);
  const token = search.get("token");
  const { data, isLoading, error } = useVerifyEmailQuery(token);

  return (
    <div className="grid h-dvh place-items-center bg-light">
      <div className="grid h-52 w-4/5 place-items-center bg-white shadow-md md:h-2/3 md:w-2/4">
        {isLoading && <Spinner className="border-primary" />}
        {error && (
          <div className="flex items-center gap-1.5">
            <h1 className="text-xl font-bold text-red-400">Error Occured:</h1>
            <p className="text-red-400">{error && "error occurred"}</p>
          </div>
        )}
        {data && (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold text-green-400">
              Email Verified
            </h1>
            <Button type="button" className="px-5">
              <Link to="/login">Login Now</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmEmail;

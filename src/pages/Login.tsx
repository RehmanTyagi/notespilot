import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as Brand from "../constants/brandInfo";
import Copyright from "../components/common/Copyright";
import { useLoginMutation } from "../store/authApiSlice";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/alertSlice";
import DarkMode from "../components/common/DarkMode";

interface FormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (data: FormInputs) => {
    const lowerCaseEmail = data.email.toLowerCase();
    try {
      const res = await login({
        email: lowerCaseEmail,
        password: data.password,
      }).unwrap();
      dispatch(setCredentials(res.token));
      navigate("/dashboard");
      dispatch(setAlert({ message: res.message, type: "success" }));
    } catch (error: any) {
      dispatch(setAlert({ message: "check credentials", type: "error" }));
    }
  };

  return (
    <main className="dark:dark-bg grid h-dvh grid-rows-[1fr,auto]">
      <div className="absolute right-5 top-5">
        <DarkMode />
      </div>
      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex w-full flex-col items-center gap-2 md:w-[450px]"
        >
          <h1 className="text-dark text-2xl font-semibold">Sign in</h1>
          <p className="text-dark mb-5 text-sm">
            to continue to your {Brand.BRAND_NAME} account.
          </p>
          {errors.email && (
            <p className="self-end text-xs font-semibold text-red-500">
              {errors.email.message}
            </p>
          )}
          <Input
            {...register("email", { required: "Email is required!" })}
            className={`mb-2`}
            placeholder="Email Address"
            type="email"
          />
          {errors.password && (
            <p className="self-end text-xs font-semibold text-red-500">
              {errors.password.message}
            </p>
          )}
          <Input
            {...register("password", { required: "password is required!" })}
            className={`mb-2`}
            placeholder="Password"
            type="password"
          />
          <Button
            type="submit"
            isDisabled={!!errors.email || !!errors.password}
            isLoading={isLoading}
          >
            Continue
          </Button>
          <div className="mt-10 flex items-center gap-1 text-sm">
            <p className="text-dark">Don't have an account?</p>
            <Link to="/signup" className="font-bold text-primary">
              Sign up
            </Link>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <p className="text-dark">Can't sign in?</p>
            <Link to="/forget" className="font-bold text-primary">
              Click here
            </Link>
          </div>
        </form>
      </div>
      <Copyright />
    </main>
  );
};

export default Login;

import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as Brand from "../constants/brandInfo";
import Copyright from "../components/common/Copyright";
import { useForgotPasswordMutation } from "../store/authApiSlice";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/alertSlice";

interface FormInput {
  email: string;
}

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const dispatch = useDispatch();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleForgotPassword = async ({ email }: FormInput) => {
    try {
      await forgotPassword({ email }).unwrap();
      dispatch(
        setAlert({
          message: `An email has been sent to ${email} with further instructions.`,
          type: "success",
        }),
      );
    } catch (error: any) {
      dispatch(
        setAlert({
          message: error.data.message,
          type: "error",
        }),
      );
    }
  };

  return (
    <main className="dark:dark-bg grid h-dvh grid-rows-[1fr,auto]">
      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit(handleForgotPassword)}
          className="flex w-full flex-col items-center gap-2 md:w-[450px]"
        >
          <h1 className="text-dark text-2xl font-semibold">Reset Password</h1>
          <p className="text-dark mb-5 text-sm">
            You will be received an email from {Brand.BRAND_NAME}.
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
          <Button
            type="submit"
            className="w-full py-3"
            isDisabled={!!errors.email}
            isLoading={isLoading}
          >
            Send Request
          </Button>
          <div className="mt-10 flex items-center gap-1 text-sm">
            <Link
              to="/login"
              className="font-bold text-primary underline underline-offset-2"
            >
              Go back to login
            </Link>
          </div>
        </form>
      </div>
      <Copyright />
    </main>
  );
};

export default ForgotPassword;

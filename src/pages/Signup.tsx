import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as Brand from "../constants/brandInfo";
import Copyright from "../components/common/Copyright";
import Spinner from "../components/common/Spinner";
import { useRegisterMutation } from "../store/authApiSlice";
import { useState } from "react";
import { setAlert } from "../store/alertSlice";
import { useDispatch } from "react-redux";

interface FormInputs {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const [formSteps, setFormSteps] = useState(1);
  const [signup, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormInputs>();
  const handleSignup = async () => {
    const { email, password, username } = getValues();

    if (formSteps === 1) {
      setFormSteps(2);
      return;
    }

    const signupData = {
      email,
      password,
      username,
    };

    try {
      const res = await signup(signupData).unwrap();
      console.log(res);
      dispatch(
        setAlert({
          message: "Success!, verify your email to login.",
          type: "success",
        }),
      );
    } catch (error) {
      dispatch(
        setAlert({ message: "This email is already in use.", type: "error" }),
      );
    }
  };

  return (
    <main className="dark:dark-bg grid h-dvh grid-rows-[1fr,auto]">
      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit(handleSignup)}
          className={`flex w-full flex-col items-center gap-2 md:w-[450px] ${isLoading ? "pointer-events-none opacity-50" : ""}`}
        >
          <h1 className="text-dark text-3xl font-semibold">
            Join {Brand.BRAND_NAME}
          </h1>
          <p className="text-dark mb-10 text-sm font-medium">
            signup, create your study notes.
          </p>
          {formSteps === 1 && (
            <Input
              {...register("email", { required: "Email is required!" })}
              className={`mb-2`}
              placeholder="Email Address"
              type="email"
            />
          )}

          {formSteps === 2 && (
            <>
              <Input
                {...register("username", { required: "username is required!" })}
                className={`mb-2`}
                placeholder="Username"
                type="username"
              />
              <Input
                {...register("password", {
                  required: "password is required!",
                  minLength: {
                    value: 6,
                    message: "password must be at least 6 characters",
                  },
                })}
                className={`mb-2`}
                placeholder="Password"
                type="password"
              />

              <Input
                {...register("confirmPassword", {
                  required: "confirm password is required!",
                  validate: (value) =>
                    value === getValues("password") || "passwords do not match",
                })}
                className={`mb-2`}
                placeholder="Confirm Password"
                type="password"
              />
            </>
          )}
          {(errors.email && (
            <p className="mb-3 text-sm font-medium text-red-500">
              {errors.email.message}
            </p>
          )) ||
            (errors.username && (
              <p className="mb-3 text-sm font-medium text-red-500">
                {errors.username.message}
              </p>
            )) ||
            (errors.password && (
              <p className="mb-3 text-sm font-medium text-red-500">
                {errors.password.message}
              </p>
            )) ||
            (errors.confirmPassword && (
              <p className="mb-3 text-sm font-medium text-red-500">
                {errors.confirmPassword.message}
              </p>
            ))}
          <Button
            type="submit"
            isDisabled={
              !!errors.email ||
              !!errors.password ||
              !!errors.username ||
              !!errors.confirmPassword
            }
            isLoading={isLoading}
          >
            Continue
          </Button>
          <p className="text-dark/80 mt-5 text-center text-[10px] font-medium md:text-xs">
            By creating an account, you consent to our{" "}
            <Link to="" className="font-semibold text-primary">
              Terms of Service
            </Link>{" "}
            and confirm that you have received and understood our{" "}
            <Link to="" className="font-semibold text-primary">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-5 flex items-center gap-1 text-sm">
            <p className="text-dark">Already have an account?</p>
            <Link to="/login" className="font-bold text-primary">
              Log in
            </Link>
          </div>
        </form>
      </div>
      <Copyright />
    </main>
  );
};

export default Signup;

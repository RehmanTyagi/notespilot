import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useForm } from "react-hook-form";
import Copyright from "../components/common/Copyright";
import { useResetPasswordMutation } from "../store/authApiSlice";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/alertSlice";
import { useParams, useNavigate } from "react-router-dom";
import { setCredentials } from "../store/authSlice";

interface FormInputs {
  password: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const { resetToken } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormInputs>();
  const dispatch = useDispatch();
  const [ResetPassword, { isLoading }] = useResetPasswordMutation();

  const handleResetPassword = async (formData: FormInputs) => {
    const { password } = formData;

    try {
      const res = await ResetPassword({
        newPassword: password,
        resetToken,
      }).unwrap();
      dispatch(
        setAlert({
          message: res.message,
          type: "success",
        }),
      );
      dispatch(setCredentials(res.token));
      navigate("/dashboard");
    } catch (error: any) {
      dispatch(setAlert({ message: error.data.error, type: "error" }));
    }
  };

  return (
    <main className="grid h-dvh grid-rows-[1fr,auto] bg-light">
      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit(handleResetPassword)}
          className="flex w-full flex-col items-center gap-2 md:w-[450px]"
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 md:h-24 md:w-24"
          >
            <path
              d="M39.6192 31.6457C39.6192 32.309 39.5637 33.4145 38.8985 34.133C38.1779 34.7963 37.0693 34.8516 36.4041 34.8516H29.3087C27.2576 34.8516 26.0381 34.8516 25.2066 34.9621C24.7632 35.0174 24.2088 35.2385 23.9317 35.349C23.8208 35.4043 23.8208 35.349 23.8763 35.2937L40.0626 18.8775C40.1181 18.8222 40.1735 18.8222 40.1181 18.9327C40.0072 19.2091 39.7855 19.7618 39.73 20.204C39.6192 21.0331 39.6192 22.2491 39.6192 24.2943V31.6457ZM54.6969 81.2815C52.8122 80.0655 51.8144 78.4626 51.4264 77.4676C51.0383 76.528 50.8166 75.4778 50.8166 74.4276C50.8166 69.8398 54.5861 66.0812 59.2424 66.0812C60.6282 66.0812 61.7369 67.1867 61.7369 68.5685C61.7369 69.5082 61.238 70.282 60.4619 70.7242C60.1848 70.89 59.7967 71.0006 59.5196 71.0559C59.2424 71.1111 58.1892 71.2217 57.6903 71.6639C57.136 72.1061 56.6925 72.8246 56.6925 73.5985C56.6925 74.4276 57.0251 75.2014 57.5794 75.7541C58.5772 76.7491 59.9076 77.3018 61.3489 77.3018C65.1183 77.3018 68.1671 74.2617 68.1671 70.5031C68.1671 67.1314 65.8943 64.1466 62.901 62.8201C62.4575 62.599 61.7369 62.4332 61.0717 62.2673C60.2402 62.1015 59.4641 61.991 59.4087 61.991C57.0805 61.7146 51.2601 59.8906 50.872 54.7501C50.872 54.7501 49.1536 62.4884 45.7168 64.5888C45.3842 64.7547 44.9407 64.9205 44.4418 65.031C43.9429 65.1416 43.3886 65.1968 43.2223 65.1968C37.6236 65.5285 31.6923 63.7597 27.5902 59.5589C27.5902 59.5589 24.8186 57.2927 23.3773 50.9362C23.0447 49.3886 22.3795 46.6249 21.9915 44.027C21.8252 43.0874 21.7698 42.3688 21.7144 41.7055C21.7144 38.9971 23.3773 37.1731 25.4838 36.8967C25.5392 36.8967 25.7055 36.8967 25.8164 36.8967C27.0914 36.8967 36.7921 36.8967 36.7921 36.8967C38.7323 36.8967 39.8409 36.3992 40.5615 35.7359C41.5039 34.8516 41.7256 33.5803 41.7256 32.0879C41.7256 32.0879 41.7256 22.0281 41.7256 20.7568C41.7256 20.7015 41.7256 20.4804 41.7256 20.4251C42.0028 18.38 43.8321 16.6665 46.5483 16.6665C46.5483 16.6665 47.3798 16.6665 47.8787 16.6665C48.433 16.6665 49.0982 16.7218 49.708 16.777C50.1514 16.8323 50.5395 16.9429 51.2047 17.1087C54.5861 17.9378 55.3067 21.3648 55.3067 21.3648C55.3067 21.3648 61.6815 22.4702 64.8966 23.023C67.9454 23.5757 75.4842 24.0732 76.9255 31.6457C80.3069 49.6649 78.2559 67.1314 78.0896 67.1314C75.706 84.1557 61.5152 83.3266 61.5152 83.3266C58.4663 83.3266 56.1936 82.3317 54.6969 81.2815ZM67.4465 45.0772C65.6172 44.9114 64.0651 45.6299 63.5108 47.0118C63.3999 47.2882 63.289 47.6198 63.3444 47.7856C63.3999 47.9514 63.5107 48.0067 63.6216 48.062C64.2868 48.3936 65.3955 48.5595 67.003 48.7253C68.6106 48.8911 69.7192 49.0016 70.4399 48.8911C70.5507 48.8911 70.6616 48.8358 70.7724 48.67C70.8833 48.5042 70.8279 48.1725 70.8279 47.8962C70.6061 46.3485 69.2758 45.2983 67.4465 45.0772Z"
              fill="#00A82D"
            ></path>
          </svg>
          <h1 className="text-2xl font-semibold text-dark">Set New Password</h1>
          <p className="mb-5 text-sm text-dark">
            passwords must match in order to set new password.
          </p>
          {errors.password && (
            <p className="self-end text-xs font-semibold text-red-500">
              {errors.password.message}
            </p>
          )}
          <Input
            {...register("password", {
              required: "new password is required!",
              maxLength: { value: 20, message: "password is too long!" },
              minLength: { value: 6, message: "password is too short!" },
            })}
            className={`mb-2`}
            placeholder="new password"
            type="password"
          />
          {errors.confirmPassword && (
            <p className="self-end text-xs font-semibold text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
          <Input
            {...register("confirmPassword", {
              required: "confirm password is required!",
              validate: (value) =>
                value === getValues("password") || "passwords must match!",
              maxLength: { value: 20, message: "password is too long!" },
              minLength: { value: 6, message: "password is too short!" },
            })}
            className={`mb-2`}
            placeholder="confirm password"
            type="password"
          />
          <Button
            type="submit"
            className="w-full py-3"
            isDisabled={!!errors.password || !!errors.confirmPassword}
            isLoading={isLoading}
          >
            Change Password
          </Button>
        </form>
      </div>
      <Copyright />
    </main>
  );
};

export default ResetPassword;

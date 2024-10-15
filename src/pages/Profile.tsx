import ProfilePicture from "../components/Dashboard/ProfilePicture";
import { useGetUserQuery } from "../store/userApiSlice";
import Input from "../components/common/Input";
import { formatDate } from "../utils/formatDate";
import Button from "../components/common/Button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useUpdateUserMutation } from "../store/userApiSlice";
import { setAlert } from "../store/alertSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const { data, isLoading: profileLoading } = useGetUserQuery();
  const user = data?.user;
  const { register, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      username: user?.name,
    },
  });
  const [updateUser, { isLoading: updateLoading }] = useUpdateUserMutation();

  const handleSubmitForm = async (data: any) => {
    try {
      if (getValues("username") === user?.name)
        return dispatch(
          setAlert({ message: "No changes made!", type: "info" }),
        );
      await updateUser(data).unwrap();
      dispatch(setAlert({ message: "Profile updated!", type: "success" }));
    } catch (error) {
      dispatch(
        setAlert({ message: "Failed to update profile!", type: "error" }),
      );
    }
  };

  useEffect(() => {
    setValue("username", user?.name); // Syncing form values when user data is loaded
  }, [user?.name, setValue]);

  return (
    <div className="dark:text-gray-300">
      <h1 className="p-3 px-6 text-lg font-bold">Profile</h1>
      <div className="relative h-28 bg-primary">
        <ProfilePicture
          isLoading={profileLoading}
          profileUrl={user?.profilePicture}
          upload
          className="absolute -bottom-10 left-6"
        />
      </div>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col gap-2 p-5"
      >
        <p className="self-end">
          account created: {user?.createdAt && formatDate(user?.createdAt)}
        </p>
        <h2 className="text-lg font-bold">Name</h2>
        <Input
          {...register("username", { required: true })}
          type="text"
          placeholder="username"
        />
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Email</h2>
          {user?.isEmailConfirmed ? (
            <p className="self-end text-xs font-medium text-green-600">
              Email verified!
            </p>
          ) : (
            <p className="self-end text-xs font-medium text-red-600">
              Email not verified!
            </p>
          )}
        </div>
        <div className="rounded-md border-2 p-3">{user?.email}</div>
        <h2 className="text-lg font-bold">Role</h2>
        <div className="rounded-md border-2 p-3">{user?.role}</div>
        <Button
          isLoading={updateLoading}
          className="mt-5 px-4 md:w-fit"
          type="submit"
        >
          Update Profile
        </Button>
      </form>
    </div>
  );
};

export default Profile;

import React from "react";
import { IoCameraOutline } from "react-icons/io5";
import { useUpdateProfilePictureMutation } from "../../store/userApiSlice";

interface ProfilePictureProps {
  className?: string;
  profileUrl: string | undefined;
  isLoading?: boolean;
  upload?: boolean;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  className,
  profileUrl,
  upload,
}) => {
  const [updateProfilePicture] = useUpdateProfilePictureMutation();

  const handleImageChange = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.onchange = async (e) => {
      try {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          const formData = new FormData();
          formData.append("profilePicture", file);
          updateProfilePicture(formData).unwrap();
        }
      } catch (error) {
        console.error(error);
      }
    };
  };

  return (
    <div>
      <div
        className={`${className} ${upload ? "group" : ""} h-20 w-20 overflow-hidden rounded-full border-4`}
      >
        <div
          onClick={handleImageChange}
          className="absolute left-0 top-0 hidden h-full w-full cursor-pointer place-content-center bg-black/50 group-hover:grid"
        >
          <IoCameraOutline className="text-3xl text-white" />
        </div>
        <img
          className="h-full w-full rounded-full object-cover"
          src={profileUrl}
          alt="avatar"
          crossOrigin="anonymous"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;

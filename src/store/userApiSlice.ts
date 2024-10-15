import api from "./apiSlice";
import { USER, Profile_Picture } from "../constants/endpointsURL";
import { User } from "@/types";

type UserData = {
  success: boolean;
  user: User;
  message: string;
};

const userApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<UserData, void>({
      query: () => ({
        url: USER,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: USER,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    updateProfilePicture: builder.mutation({
      query: (data) => ({
        url: Profile_Picture,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdateProfilePictureMutation,
} = userApiSlice;

export default userApiSlice.reducer;

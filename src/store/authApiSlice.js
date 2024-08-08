import apiSlice from "./apiSlice";
import { USER_URL } from "../constants/endpointsURL";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    Register: builder.mutation({
      query: (credentials) => ({
        url: USER_URL,
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useRegisterMutation } = authApiSlice;

import apiSlice from "./apiSlice";
import * as URL from "../constants/endpointsURL";
const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        Register: builder.mutation({
            query: (credentials) => ({
                url: URL.REGISTER,
                method: "POST",
                body: credentials,
            }),
        }),
        verifyEmail: builder.query({
            query: (token) => ({
                url: `${URL.VERIFY_EMAIL}${token}`,
                method: "GET",
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: URL.LOGIN,
                method: "POST",
                body: credentials,
            }),
        }),
        forgotPassword: builder.mutation({
            query: (email) => ({
                url: URL.FORGOT_PASSWORD,
                method: "POST",
                body: email,
            }),
        }),
        resetPassword: builder.mutation({
            query: ({ newPassword, resetToken }) => ({
                url: `${URL.RESET_PASSWORD}/${resetToken}`,
                method: "PUT",
                body: { newPassword },
            }),
        }),
    }),
});
export const { useRegisterMutation, useVerifyEmailQuery, useLoginMutation, useForgotPasswordMutation, useResetPasswordMutation, } = authApiSlice;

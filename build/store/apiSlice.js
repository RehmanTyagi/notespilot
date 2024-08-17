import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../constants/baseURL";
const baseQuery = fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("token"); // or wherever you're storing the token
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});
const api = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: ["Notes,User"],
    endpoints: () => ({}),
});
export default api;

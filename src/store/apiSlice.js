import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../constants/baseURL";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ["Notes,User"],
  endpoints: () => ({}),
});

export default api;

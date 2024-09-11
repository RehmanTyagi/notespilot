import api from "./apiSlice";
import * as URL from "../constants/endpointsURL";
import { Note } from "@/types";

interface responseData {
  data: Note[];
}
interface GetNotesQuery {
  query?: string;
  page?: number;
  limit?: number;
  filter?: string;
}
const noteApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query<responseData, GetNotesQuery>({
      query: (args = {}) => {
        const { query = "", page = 1, limit = 0, filter } = args;
        return `${URL.GET_NOTES}${query || filter ? `?search=${query}&page=${page}&limit=${limit}&filter=${filter}` : ""}`;
      },
      providesTags: ["Notes"],
    }),
    addNote: builder.mutation({
      query: (note) => ({
        url: "/notes",
        method: "POST",
        body: note,
      }),
      invalidatesTags: ["Notes"],
    }),
    getNote: builder.query({
      query: (id) => `/notes/${id}`,
    }),
    deleteNote: builder.mutation({
      query: (id) => ({
        url: `/notes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notes"],
    }),
    chatBot: builder.mutation({
      query: (message) => {
        return {
          url: "/chat",
          method: "POST",
          body: { message },
        };
      },
    }),
  }),
});

export const { useGetNotesQuery, useChatBotMutation, useGetNoteQuery } =
  noteApiSlice;

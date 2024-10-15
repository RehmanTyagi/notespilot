import api from "./apiSlice";
import * as URL from "../constants/endpointsURL";
import { Note } from "@/types";

interface responseData {
  results: Note[];
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
    getNote: builder.query({
      query: (id) => `${URL.GET_NOTES}/${id}`,
      providesTags: (result, error, id) => [{ type: "Notes", id }],
    }),
    addNote: builder.mutation({
      query: (note) => ({
        url: "/notes",
        method: "POST",
        body: note,
      }),
      invalidatesTags: ["Notes"],
    }),
    updateNote: builder.mutation({
      query: (data) => ({
        url: `/notes/${data?.id}`,
        body: data?.note,
        method: "PUT",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Notes", id }],
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

export const {
  useGetNotesQuery,
  useChatBotMutation,
  useUpdateNoteMutation,
  useAddNoteMutation,
  useDeleteNoteMutation,
  useGetNoteQuery,
} = noteApiSlice;

export default noteApiSlice;

import { Note } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  note: Note | null;
};

const initialState: InitialState = {
  note: null,
};

const currentNoteSlice = createSlice({
  name: "currentNote",
  initialState,
  reducers: {
    setCurrentNote: (state, action) => {
      state.note = action.payload;
    },
  },
});

export const { setCurrentNote } = currentNoteSlice.actions;
export default currentNoteSlice.reducer;

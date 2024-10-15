import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import alertReducer from "./alertSlice";
import authReducer from "./authSlice";
import filterReducer from "./filterSlice";
import currentNoteReducer from "./currentNoteSlice";
import userReducer from "./userApiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    alert: alertReducer,
    auth: authReducer,
    filter: filterReducer,
    currentNote: currentNoteReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

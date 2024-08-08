import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import alertSlice from "./alertSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    alert: alertSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

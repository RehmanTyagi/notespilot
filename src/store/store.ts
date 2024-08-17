import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import alertSlice from "./alertSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    alert: alertSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import alertReducer from "./alertSlice";
import authReducer from "./authSlice";
import filterReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    alert: alertReducer,
    auth: authReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

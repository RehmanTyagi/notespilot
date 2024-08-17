import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuth: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token")!)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userAuth = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userAuth = null;
      localStorage.clear();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

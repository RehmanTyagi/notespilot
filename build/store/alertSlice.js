import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    message: "",
    type: "",
    alertExpires: 5000,
};
const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        setAlert(state, action) {
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        clearAlert(state) {
            state.message = "";
            state.type = "";
            state.alertExpires = 5000;
        },
    },
});
export const { setAlert, clearAlert } = alertSlice.actions;
export default alertSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

// exporting whole Slice
// export default authSlice;

// exporting only reducer of the slice
export default authSlice.reducer;

// exporting slice actions
export const authActions = authSlice.actions;

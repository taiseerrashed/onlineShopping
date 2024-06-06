import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        online: false,
        users: JSON.parse(localStorage.getItem("users")) || [],
        currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
    },
    reducers: {
        register: (state, action) => {
            state.users.push({...action.payload});
            localStorage.setItem("users", JSON.stringify(state.users));
        },
        login: (state , action) => {
            state.online = true;
            state.currentUser = action.payload.currentUser;
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        },
        logout: (state) => {
            state.currentUser = null;
            state.online = false;
            localStorage.removeItem("currentUser");
        },
    },
});

export const { register, login, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;

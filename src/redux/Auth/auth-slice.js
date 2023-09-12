import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshCurrentUser } from "./auth-operations";



const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isRefreshing: false,
    error: null,
    // currentRoute: null,
    // isRefreshed: false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    // reducers: {
    //     setCurrentRoute: (state, action) => {
    //       state.currentRoute = action.payload;
    //     },
    // },
    extraReducers: builder =>{
        builder
        .addCase(register.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(register.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.error = null;
            // state.isRefreshed = false;
        })
        .addCase(register.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.token = null;
            state.error = payload;
        })

        .addCase(logIn.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(logIn.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.error = null;
            // state.isRefreshed = false;
        })
        .addCase(logIn.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })

        .addCase(logOut.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(logOut.fulfilled, state => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.error = null;
        })
        .addCase(logOut.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })

        .addCase(refreshCurrentUser.pending, state => {
            state.isLoading = true;
            state.isRefreshing = true;
        })
        .addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            // state.isRefreshed = true; 
        })
        .addCase(refreshCurrentUser.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.isRefreshing = false;
            state.error = payload;
        });
    },
});


export const authReducer = authSlice.reducer;
// export const { setCurrentRoute } = authSlice.actions;
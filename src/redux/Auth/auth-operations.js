import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { token } from "../../api/axiosSettings";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkApi) => {
        try{
            const response = await axios.post('users/signup', credentials);
            token.set(response.data.token);
            toast.success(`Welcome! You have been successfully registered!`);
            return response.data;
        }
        catch(error) {
            toast.error('Oops. Something went wrong. Please try again.');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkApi) => {
        try{
            const response = await axios.post('users/login', credentials);
            token.set(response.data.token);
            toast.success(`Welcome!`);
            return response.data;
        }
        catch(error){
            toast.error('Oops. Your email or password is not valid');
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        try{
            await axios.post('users/logout');
            token.unset();
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }   
);


export const refreshCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistedToken = state.auth.token;
        if(persistedToken === null){
            return thunkApi.rejectWithValue('Unable to fetch user');
        }

        try{
            token.set(persistedToken);
            const response = await axios.get('users/current');
            return response.data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message);
        }
    }
);



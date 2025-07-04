import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from './../../api/axiosApi';


export const createUser = createAsyncThunk(
    'user/createUser',
    async (user, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.post(`/.json`, user);
            return { ...user, id: res.data.name }; 
        } catch (error) {
            console.log("Create User Error:", error);
            return rejectWithValue(error.message);
        }
    }
);


export const fetchUser = createAsyncThunk('user/fetchUser', async (_, { rejectWithValue }) => {
    try {
        let res = await axiosInstance.get('/.json');
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const deleteUser = createAsyncThunk('user/deleteUser', async (id, { rejectWithValue }) => {
    try {
        let res = await axiosInstance.delete(`${id}/.json`);
        return id;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const editUser = createAsyncThunk('user/editUser', async (user, { rejectWithValue }) => {
    try {
        console.log("thunk", user);

        let obj = {
            email: user.email,
            password: user.password,
        }
        await axiosInstance.put(`${user.id}/.json`, obj);
        return user;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
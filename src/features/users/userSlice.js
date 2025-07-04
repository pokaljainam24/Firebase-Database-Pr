import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, editUser, fetchUser } from "./thunk";

const initialState = {
    users: [],
    editUserData: {},
    editIndex: -1,
    loading: false,
    error: false,
    errorMsg: ''
}


const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
            console.log(action.payload);

        })
        builder.addCase(createUser.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            let data = action.payload;
            let newData = [];
            for (let key in data) {
                newData.push({ ...data[key], id: key });
            }
            state.users = newData;
        })

        builder.addCase(fetchUser.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.filter(user => user.id !== action.payload);
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMsg = action.payload;
        })
        builder.addCase(editUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(editUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload;
                }
                return user;
            })
        })
        builder.addCase(editUser.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMsg = action.payload;
        })

    }
})

export default userSlice.reducer;
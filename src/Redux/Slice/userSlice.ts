import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { UserModel } from '@model';

// Define the initial state using that type
const initialState: UserModel = {
    id: '',
    name: '',
    email: '',
    username: '',
    token: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserModel>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
    },
})

export const { login } = userSlice.actions

export const selectCount = (state: RootState) => state.user;

export default userSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { UserType } from '../types/UserType';

type InitialStateType = {
  user: UserType
}

const initialState:InitialStateType = {
  user: { displayName: "" }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user.displayName = action.payload.displayName
    },
    logout: (state) => {
      state.user = initialState.user
    }
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
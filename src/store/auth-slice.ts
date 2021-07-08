/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    auth(state) {
      state.isAuth = !state.isAuth;
    },
  },
});

export const AuthActions = authSlice.actions;
export default authSlice;

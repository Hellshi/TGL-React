/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    user: {
      name: '',
      email: '',
      picture: '',
    },
  },
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.isAuth = true;
    },
    logout(state) {
      state.user = {
        name: '',
        email: '',
        picture: '',
      };
      state.isAuth = false;
    },
  },
});

export const AuthActions = authSlice.actions;
export default authSlice;

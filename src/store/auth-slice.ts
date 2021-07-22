/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    user: {
      name: '',
      email: '',
      is_admin: false,
      picture: {},
    },
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout(state) {
      state.user = {
        name: '',
        email: '',
        picture: {},
        is_admin: false,
      };
      state.isAuth = false;
    },
  },
});

export const AuthActions = authSlice.actions;
export default authSlice;

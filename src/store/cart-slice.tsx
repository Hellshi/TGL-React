/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    buyedGames: [],
  },
  reducers: {
    buyGames(state, action) {
      const newItens = action.payload;
      state.buyedGames = state.buyedGames.concat(newItens);
      // eslint-disable-next-line no-console
      console.log(state.buyedGames);
    },
  },
});

export const CartActions = cartSlice.actions;
export default cartSlice;

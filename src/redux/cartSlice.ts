import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState, initialState } from "./Cart";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      state.cartProductIds = [action.payload, ...state.cartProductIds];
    },
    removeFromCart: (state: CartState, action: PayloadAction<CartItem>) => {
      const indexOfId = state.cartProductIds.indexOf(action.payload);
      if (indexOfId !== -1) {
        state.cartProductIds.splice(indexOfId, 1);
      }
    },
    clearCart: (state: CartState) => {
      state.cartProductIds = [];
    },
  },
});

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice;

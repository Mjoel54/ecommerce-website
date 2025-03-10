import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState, initialState } from "./Cart";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      state.cartProducts.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state: CartState, action: PayloadAction<CartItem>) => {
      const product = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        state.totalPrice -= product.price;
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    clearCart: (state: CartState) => {
      state.cartProducts = [];
      state.totalPrice = 0;
    },
  },
});

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice;

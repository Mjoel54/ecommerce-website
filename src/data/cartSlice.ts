import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cartProductIds: number[];
}

const initialState: CartState = {
  cartProductIds: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.cartProductIds = [action.payload, ...state.cartProductIds];
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const indexOfId = state.cartProductIds.indexOf(action.payload);
      if (indexOfId !== -1) {
        state.cartProductIds.splice(indexOfId, 1);
      }
    },
    clearCart: (state) => {
      state.cartProductIds = [];
    },
  },
});

export default cartSlice;

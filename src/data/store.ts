import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../data/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

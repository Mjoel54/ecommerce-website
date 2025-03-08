import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../data/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;

import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartReducer";
import wishlistSlice from "./wishlistReducer";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  wishlist: wishlistSlice.reducer,
});

export default rootReducer;

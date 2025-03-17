import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WishlistItem {
  readonly id: number;
}

export interface WishlistState {
  wishlistProducts: WishlistItem[];
}

export const initialState: WishlistState = {
  wishlistProducts: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (
      state: WishlistState,
      action: PayloadAction<WishlistItem>
    ) => {
      state.wishlistProducts.push(action.payload);
    },
    removeFromWishlist: (
      state: WishlistState,
      action: PayloadAction<WishlistItem>
    ) => {
      const product = state.wishlistProducts.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        state.wishlistProducts = state.wishlistProducts.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    clearWishlist: (state: WishlistState) => {
      state.wishlistProducts = [];
    },
  },
});

export default wishlistSlice;

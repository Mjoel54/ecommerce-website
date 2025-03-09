export interface CartItem {
  readonly id: number;
}

export interface CartState {
  cartProductIds: CartItem[];
  //   totalPrice: number;
}

export const initialState: CartState = {
  cartProductIds: [],
  //   totalPrice: 0,
};

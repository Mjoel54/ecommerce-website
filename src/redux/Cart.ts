export interface CartItem {
  readonly id: number;
  price: number;
}

export interface CartState {
  cartProducts: CartItem[];
  totalPrice: number;
}

export const initialState: CartState = {
  cartProducts: [],
  totalPrice: 0,
};

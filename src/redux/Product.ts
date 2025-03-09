export interface Product {
  name: string;
  description: string;
  price: number;
  image?: unknown;
}

export interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};

"use client";

import { useDispatch, useSelector } from "react-redux";
import productDataObjects from "../data/products";
// import { CheckCircleIcon } from "@heroicons/react/20/solid";
import cartSlice from "../redux/cartSlice";
import { RootState } from "../redux/store";

export default function ProductList() {
  const { cartProducts } = useSelector((state: RootState) => state.cart);
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  console.log("cartProductIds", cartProducts);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {productDataObjects.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <img
                // alt={product.imageAlt}
                src={product.image.src}
                className="aspect-3/4 w-full bg-gray-200 object-cover sm:aspect-auto sm:h-96"
              />
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {/* <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a> */}
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  {/* <p className="text-sm text-gray-500 italic">
                    {product.options}
                  </p> */}
                  <p className="text-base font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <div>
                  {!cartProducts.some(
                    (cartItem) => cartItem.id === product.id
                  ) && (
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          addToCart({ id: product.id, price: product.price })
                        )
                      }
                      className="rounded-sm bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 cursor-pointer"
                    >
                      Add to cart
                    </button>
                  )}

                  {cartProducts.some(
                    (cartItem) => cartItem.id === product.id
                  ) && (
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          removeFromCart({
                            id: product.id,
                            price: product.price,
                          })
                        )
                      }
                      className="rounded-sm bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 cursor-pointer"
                    >
                      Remove from cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

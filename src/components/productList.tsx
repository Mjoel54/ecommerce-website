"use client";

import { useDispatch, useSelector } from "react-redux";
import productDataObjects from "../data/products";
import { HeartIcon } from "@heroicons/react/20/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";

import cartSlice from "../redux/reducers/cartReducer";
import wishlistSlice from "@/redux/reducers/wishlistReducer";
import { RootState } from "../redux/store";

export default function ProductList() {
  const { cartProducts } = useSelector(
    (state: RootState) => state.reducer.cart
  );
  const { wishlistProducts } = useSelector(
    (state: RootState) => state.reducer.wishlist
  );
  const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
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
              <div className="flex flex-1 justify-between p-4">
                {/* Left side - Product information */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.name}
                  </h3>
                  {/* <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a> */}
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>

                {/* Right side - Wish and cart button */}
                <div className="flex flex-col justify-between items-end h-full">
                  <div>
                    {!wishlistProducts.some(
                      (wishlistItem) => wishlistItem.id === product.id
                    ) && (
                      <button
                        type="button"
                        onClick={() =>
                          dispatch(
                            addToWishlist({
                              id: product.id,
                            })
                          )
                        }
                        className="cursor-pointer"
                      >
                        <HeartOutlineIcon className="h-6 w-6 text-amber-900" />{" "}
                      </button>
                    )}
                    {wishlistProducts.some(
                      (wishlistItem) => wishlistItem.id === product.id
                    ) && (
                      <button
                        type="button"
                        onClick={() =>
                          dispatch(
                            removeFromWishlist({
                              id: product.id,
                            })
                          )
                        }
                        className="cursor-pointer"
                      >
                        <HeartIcon className="h-6 w-6 text-amber-900" />{" "}
                      </button>
                    )}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

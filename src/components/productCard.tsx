"use client";

import { useDispatch, useSelector } from "react-redux";
import { HeartIcon } from "@heroicons/react/20/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";

import cartSlice from "../redux/reducers/cartReducer";
import wishlistSlice from "@/redux/reducers/wishlistReducer";
import { RootState } from "../redux/store";
import CartButton from "./CartButton";

export interface ProductCardProps {
  productId: number;
  productImageSrc: string;
  productName: string;
  productDescription: string;
  productPrice: number;
}

export default function ProductCard({
  productId,
  productImageSrc,
  productName,
  productDescription,
  productPrice,
}: ProductCardProps) {
  const { cartProducts } = useSelector((state: RootState) => state.cart);
  const { wishlistProducts } = useSelector(
    (state: RootState) => state.wishlist
  );
  const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  console.log("cartProductIds", cartProducts);
  return (
    <div
      key={productId}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md"
    >
      <img
        // alt={product.imageAlt}
        src={productImageSrc}
        className="aspect-3/4 w-full bg-gray-200 object-cover sm:aspect-auto sm:h-96"
      />
      <div className="flex flex-1 justify-between p-4">
        {/* Left side - Product information */}
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-medium text-gray-900">{productName}</h3>
          {/* <a href="#">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </a> */}
          <p className="text-sm text-gray-500">{productDescription}</p>
          <p className="text-sm font-medium text-gray-900">${productPrice}</p>
        </div>

        {/* Right side - Wish and cart button */}
        <div className="flex flex-col justify-between items-end h-full">
          <div>
            {!wishlistProducts.some(
              (wishlistItem) => wishlistItem.id === productId
            ) && (
              <button
                type="button"
                onClick={() =>
                  dispatch(
                    addToWishlist({
                      id: productId,
                    })
                  )
                }
                className="cursor-pointer"
              >
                <HeartOutlineIcon className="h-6 w-6 text-amber-900" />{" "}
              </button>
            )}
            {wishlistProducts.some(
              (wishlistItem) => wishlistItem.id === productId
            ) && (
              <button
                type="button"
                onClick={() =>
                  dispatch(
                    removeFromWishlist({
                      id: productId,
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
            {!cartProducts.some((cartItem) => cartItem.id === productId) && (
              <CartButton
                buttonText="Add to cart"
                onClick={() =>
                  dispatch(addToCart({ id: productId, price: productPrice }))
                }
              />
            )}

            {cartProducts.some((cartItem) => cartItem.id === productId) && (
              <CartButton
                buttonText="Remove from cart"
                onClick={() =>
                  dispatch(
                    removeFromCart({
                      id: productId,
                      price: productPrice,
                    })
                  )
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

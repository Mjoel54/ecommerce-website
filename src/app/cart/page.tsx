"use client";

import productDataObjects from "../../data/products";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../../redux/reducers/cartReducer";
// import { cartState } from "../../redux/Cart";
import { RootState } from "../../redux/store";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/outline";

// console.log(productDataObjects);
// const shipping = 8;
// const taxes = 6.4;

export default function Cart() {
  const { cartProducts, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();
  const cartProductIdSet = new Set(cartProducts.map((cartItem) => cartItem.id));

  const cartProductData = productDataObjects.filter((product) =>
    cartProductIdSet.has(product.id)
  );

  const { clearCart, removeFromCart } = cartSlice.actions;

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <main className="relative lg:min-h-full">
        <div className="h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
          <img
            alt="TODO"
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/confirmation-page-06-hero.jpg"
            className="size-full object-cover"
          />
        </div>

        <div>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
            <div className="lg:col-start-2">
              <h1 className="my-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Your Cart
              </h1>
              {/* <p className="mt-2 text-base text-gray-500">
                We appreciate your order, we're currently processing it. So hang
                tight and we'll send you confirmation very soon!
              </p> */}

              {/* <dl className="mt-16 text-sm font-medium">
                <dt className="text-gray-900">Tracking number</dt>
                <dd className="mt-2 text-indigo-600">51547878755545848512</dd>
              </dl> */}
              {cartProductData.length > 0 ? (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => dispatch(clearCart())}
                    className="rounded-sm my-2 bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 cursor-pointer"
                  >
                    Empty cart
                  </button>
                </div>
              ) : (
                <></>
              )}

              {cartProductData.length > 0 && (
                <ul
                  role="list"
                  className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
                >
                  {cartProductData.map((product) => (
                    <li key={product.id} className="flex space-x-6 py-6">
                      <img
                        alt="test"
                        src={product.image.src}
                        className="size-24 flex-none rounded-md bg-gray-100 object-cover"
                      />
                      <div className="flex-auto space-y-1">
                        <h3 className="text-gray-900">
                          <p>{product.name}</p>
                        </h3>
                        {/* <p>{product.color}</p>
                      <p>{product.size}</p> */}
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <p className="font-medium text-gray-900">
                          $ {product.price}
                        </p>
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
                          className="rounded-sm  bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 cursor-pointer"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <dl className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="text-gray-900">${totalPrice}</dd>
                </div>

                {/* <div className="flex justify-between">
                  <dt>Shipping</dt>
                  <dd className="text-gray-900">${shipping}</dd>
                </div>

                <div className="flex justify-between">
                  <dt>Taxes</dt>
                  <dd className="text-gray-900">${taxes}</dd>
                </div> */}

                <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">${totalPrice}</dd>
                </div>
              </dl>

              {/* <dl className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
                <div>
                  <dt className="font-medium text-gray-900">
                    Shipping Address
                  </dt>
                  <dd className="mt-2">
                    <address className="not-italic">
                      <span className="block">Kristin Watson</span>
                      <span className="block">7363 Cynthia Pass</span>
                      <span className="block">Toronto, ON N3Y 4H8</span>
                    </address>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">
                    Payment Information
                  </dt>
                  <dd className="mt-2 space-y-2 sm:flex sm:space-y-0 sm:space-x-4">
                    <div className="flex-none">
                      <svg
                        width={36}
                        height={24}
                        viewBox="0 0 36 24"
                        aria-hidden="true"
                        className="h-6 w-auto"
                      >
                        <rect rx={4} fill="#224DBA" width={36} height={24} />
                        <path
                          d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                          fill="#fff"
                        />
                      </svg>
                      <p className="sr-only">Visa</p>
                    </div>
                    <div className="flex-auto">
                      <p className="text-gray-900">Ending with 4242</p>
                      <p>Expires 12 / 21</p>
                    </div>
                  </dd>
                </div>
              </dl> */}

              <div className="mt-16 border-t border-gray-200 py-6 text-right">
                <Link
                  href="/"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

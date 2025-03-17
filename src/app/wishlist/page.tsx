"use client";
import productDataObjects from "../../data/products";
import { useSelector, useDispatch } from "react-redux";
import wishlistSlice from "@/redux/reducers/wishlistReducer";
import { RootState } from "../../redux/store";
// import Link from "next/link";
// import { TrashIcon } from "@heroicons/react/24/outline";

export default function Wishlist() {
  const { wishlistProducts } = useSelector(
    (state: RootState) => state.reducer.wishlist
  );

  const wishlistProductIdSet = new Set(
    wishlistProducts.map((wishlistItem) => wishlistItem.id)
  );

  const wishlistProductData = productDataObjects.filter((product) =>
    wishlistProductIdSet.has(product.id)
  );

  return (
    <div>
      <h1>Wishlist</h1>
    </div>
  );
}

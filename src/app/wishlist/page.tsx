"use client";
import productDataObjects from "../../data/products";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ProductCard from "@/components/productCard";

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
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2>Wishlist</h2>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {wishlistProductData.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id}
              productImageSrc={product.image.src}
              productName={product.name}
              productDescription={product.description}
              productPrice={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

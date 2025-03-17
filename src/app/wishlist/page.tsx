"use client";
import productDataObjects from "../../data/products";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ProductCard from "@/components/productCard";
import Navbar from "@/components/Navbar";

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
    <>
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="mb-4">
          <h2 className="text-5xl font-semibold tracking-tight sm:text-5xl sm:text-left text-center text-amber-900 mb-2">
            Wish List
          </h2>
          <p className="text-center sm:text-left text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            A curated collection of your top picks. Explore your personal
            favourites and rediscover what you love.
          </p>
        </div>
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
    </>
  );
}

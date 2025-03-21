"use client";

import ProductCard from "@/components/productCard";
import productDataObjects from "../data/products";

interface ProductListProps {
  searchQuery: string;
}

export default function ProductList({ searchQuery }: ProductListProps) {
  const filteredProducts = productDataObjects.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {filteredProducts.map((product) => (
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

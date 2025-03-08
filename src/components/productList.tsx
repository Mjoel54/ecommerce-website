import productDataObjects from "../data/products";

// const products = [
//   {
//     id: 1,
//     name: "Basic Tee 8-Pack",
//     href: "#",
//     price: "$256",
//     description:
//       "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
//     options: "8 colors",
//     imageSrc:
//       "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-01.jpg",
//     imageAlt:
//       "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
//   },
//   {
//     id: 2,
//     name: "Basic Tee",
//     href: "#",
//     price: "$32",
//     description:
//       "Look like a visionary CEO and wear the same black t-shirt every day.",
//     options: "Black",
//     imageSrc:
//       "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-02.jpg",
//     imageAlt: "Front of plain black t-shirt.",
//   },
//   // More products...
// ];

export default function ProductList() {
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
                className="aspect-3/4 w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
              />
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Navbar from "../components/Navbar";
import ProductList from "../components/productList";
import SearchProducts from "../components/searchProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <SearchProducts />
      <ProductList />
    </>
  );
}

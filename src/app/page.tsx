"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/productList";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar onSearchChange={setSearchQuery} />
      <ProductList searchQuery={searchQuery} />
    </>
  );
}

import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SubNavbar from "../SubNavbar/SubNavbar";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  categoryList,
  handleSearch,
}) {
  return (
    <div className="home">
      <Hero></Hero>
      <SubNavbar categoryList={categoryList} handleSearch={handleSearch} />
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      ></ProductGrid>
    </div>
  );
}

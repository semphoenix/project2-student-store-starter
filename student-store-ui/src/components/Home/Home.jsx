import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SubNavbar from "../SubNavbar/SubNavbar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

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
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  const productList = products.map((element, index) => {
    return (
      <ProductCard
        key={index}
        product={element}
        productId={element.id}
        showDescription={false}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      ></ProductCard>
    );
  });
  return (
    <div id="Buy" className="product-grid">
      <div className="content">
        <h3>Best Selling Products</h3>
        <div className="grid">{productList}</div>
      </div>
    </div>
  );
};

export default ProductGrid;

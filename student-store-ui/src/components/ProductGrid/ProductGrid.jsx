import React, { useEffect } from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
  onProductCardClick,
}) => {
  const productList = products.map((element, index) => {
    const productInCart = shoppingCart.find(
      (product) => element.id === product.id
    );
    return (
      <ProductCard
        key={index}
        product={element}
        productId={element.id}
        showDescription={false}
        handleAddItemToCart={() => {
          handleAddItemToCart(element.id);
        }}
        handleRemoveItemToCart={() => {
          handleRemoveItemToCart(element.id);
        }}
        quantity={productInCart ? productInCart.quantity : 0}
        onProductCardClick={onProductCardClick}
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

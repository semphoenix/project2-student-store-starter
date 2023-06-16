import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductView = ({
  product,
  productId,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  console.log(product);
  return (
    <div className="product-view">
      <h1 className="product-id">Product # {product.id}</h1>
      <div className="product-view-card">
        <ProductCard
          product={product}
          productId={productId}
          key={productId}
          showDescription={true}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
        />
      </div>
    </div>
  );
};

export default ProductView;

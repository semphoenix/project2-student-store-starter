import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductView = ({
  product,
  productId,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
}) => {
  const productInCart = shoppingCart.find(
    (element) => product.id === element.id
  );
  return (
    <div className="product-view">
      <h1 className="product-id">Product # {product.id}</h1>
      <div className="product-view-card">
        <ProductCard
          product={product}
          productId={productId}
          key={productId}
          showDescription={true}
          handleAddItemToCart={() => {
            handleAddItemToCart(product.id);
          }}
          handleRemoveItemToCart={() => {
            handleRemoveItemToCart(product.id);
          }}
          quantity={productInCart ? productInCart.quantity : 0}
        />
      </div>
    </div>
  );
};

export default ProductView;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const ProductDetail = (props) => {
  console.log(props.product);
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  //console.log(productId);
  return (
    <div className="product-detail">
      <div className="product-view">
        <h1 className="product-id">Product # {product.id}</h1>
        <div className="product-view-card">
          <ProductCard
            product={props.product}
            productId={props.product.id}
            showDescription={true}
            handleAddItemToCart={props.handleAddItemToCart}
            handleRemoveItemToCart={props.handleRemoveItemToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

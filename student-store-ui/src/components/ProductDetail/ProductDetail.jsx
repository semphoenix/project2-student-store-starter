import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetail = ({
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
}) => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/store/${productId}`)
      .then((response) => {
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(true);
      });
  }, [productId]);

  if (loading) return <h1 className="loading">Loading...</h1>;
  else {
    return (
      <div className="product-detail">
        <ProductView
          product={product}
          productId={productId}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          shoppingCart={shoppingCart}
        />
      </div>
    );
  }
};

export default ProductDetail;

import React, { useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const ShoppingCart = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const cartList = props.shoppingCart.map((element, index) => {
    const product = props.products.find((product) => product.id === element.id);
    return (
      <div className="product-row" key={index}>
        <span className="flex-2 cart-product-name">{product.name}</span>
        <span className="center cart-product-quantity">{element.quantity}</span>
        <span className="center cart-product-price">
          {formatter.format(product.price)}
        </span>
        <span className="center cart-product-subtotal">
          {formatter.format(element.quantity * product.price)}
        </span>
      </div>
    );
  });
  const cartTable =
    props.shoppingCart.length > 0 ? (
      <div className="CartTable">
        <div className="header">
          <div className="header-row">
            <span className="flex-2">Name</span>
            <span className="center">Quantity</span>
            <span className="center">Unit Price</span>
            <span className="center">Cost</span>
          </div>
          {cartList}
        </div>
        <div className="receipt">
          <div className="receipt-subtotal">
            <span className="label">Subtotal</span>
            <span></span>
            <span></span>
            <span className="center subtotal">
              {formatter.format(props.totalPrice)}
            </span>
          </div>
          <div className="receipt-taxes">
            <span className="label">Taxes and Fees</span>
            <span></span>
            <span></span>
            <span className="center">
              {formatter.format(props.totalPrice * 0.0875)}
            </span>
          </div>
          <div className="receipt-total">
            <span className="label">Total</span>
            <span></span>
            <span></span>
            <span className="center total-price">
              {formatter.format(props.totalPrice * 1.0875)}
            </span>
          </div>
        </div>
      </div>
    ) : (
      <div className="notification">
        No items added to cart yet. Start shopping now!
      </div>
    );

  const shoppingCart = props.isOpen ? (
    <div className="open">
      <h3>
        Shopping Cart{" "}
        <span className="button">
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
      </h3>
      {cartTable}
      <CheckoutForm />
    </div>
  ) : (
    <div className="cart-icons">
      <span className="cart-icon icon button">
        <i className="material-icons md-48">add_shopping_cart</i>
      </span>
      <span className="cart-icon icon button">
        <i className="material-icons md-48">monetization_on</i>
      </span>
      <span className="cart-icon icon button">
        <i className="material-icons md-48">fact_check</i>
      </span>
    </div>
  );

  // const shoppingList = props.product.map((element, index) => {});

  return <div className="shopping-cart">{shoppingCart}</div>;
};

export default ShoppingCart;

import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar(props) {
  return (
    <section className={props.isOpen ? "sidebar open" : "sidebar closed"}>
      <div className="wrapper">
        <button
          className={
            props.isOpen
              ? "toggle-button button open"
              : "toggle-button button closed"
          }
          onClick={props.handleOnToggle}
        >
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <ShoppingCart
          isOpen={props.isOpen}
          products={props.products}
          shoppingCart={props.shoppingCart}
          totalPrice={props.totalPrice}
        />
        <CheckoutForm
          isOpen={props.isOpen}
          shoppingCart={props.shoppingCart}
          checkoutForm={props.checkoutForm}
          handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
          receipt={props.receipt}
          setReciept={props.setReciept}
          products={props.products}
        />
      </div>
    </section>
  );
}

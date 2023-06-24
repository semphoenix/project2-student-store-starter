import React, { useState } from "react";

const CheckoutForm = ({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  receipt,
  products,
}) => {
  const [hasErrors, setHasErrors] = useState(false);
  const [errors, setErrors] = useState([]);
  const handleOnClick = () => {
    const formErrors = [];
    if (checkoutForm.name.trim() === "")
      formErrors.push("Checkout form requires a name");
    if (checkoutForm.email.trim() === "")
      formErrors.push("Checkout form requires an email");
    if (shoppingCart.length === 0) formErrors.push("Cart is empty!");
    if (formErrors.length === 0) {
      setErrors([]);
      handleOnSubmitCheckoutForm();
      console.log(receipt);
    } else {
      console.log("!");
      setErrors(formErrors);
      setHasErrors(true);
    }
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      {isOpen && (
        <>
          <div className="checkout-form">
            <h3 className="">
              Payment Info{" "}
              <span className="button">
                <i className="material-icons md-48">monetization_on</i>
              </span>
            </h3>
            <div className="input-field">
              <label className="label">Name</label>
              <div className="control ">
                <input
                  name="name"
                  className="checkout-form-input"
                  type="text"
                  placeholder="Student Name"
                  value={checkoutForm.name}
                  onChange={handleOnCheckoutFormChange}
                />
              </div>
            </div>
            <div className="input-field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  name="email"
                  className="checkout-form-input"
                  type="email"
                  placeholder="student@codepath.org"
                  value={checkoutForm.email}
                  onChange={handleOnCheckoutFormChange}
                />
              </div>
            </div>
            {hasErrors && (
              <ul className="is-danger">
                {errors.map((element, index) => {
                  return <li key={index}>{element}</li>;
                })}
              </ul>
            )}
            <div className="field">
              <div className="control">
                <button
                  className="button checkout-button"
                  onClick={handleOnClick}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <div className="checkout-success">
            <h3>
              Checkout Info{" "}
              <span className="icon button">
                <i className="material-icons md-48">fact_check</i>
              </span>
            </h3>
            {receipt && (
              <div className="card">
                <header className="card-head">
                  <h4 className="card-title">Receipt</h4>
                </header>
                <section className="card-body">
                  <p className="header">
                    Showing receipt for {receipt.name} available at{" "}
                    {receipt.email}:
                  </p>
                  <ul className="purchase">
                    {receipt.shoppingCart.map((element, index) => {
                      const productInCart = products.find(
                        (product) => product.id === element.id
                      );
                      return (
                        <li key={element.id}>
                          {element.quantity} total {productInCart.name}{" "}
                          purchased at a cost of{" "}
                          {formatter.format(productInCart.price)} for a total
                          cost of{" "}
                          {formatter.format(
                            productInCart.price * element.quantity
                          )}
                          .
                        </li>
                      );
                    })}
                  </ul>
                </section>
                <footer className="card-foot">
                  <button className="button is-success">Shop More</button>
                  <button className="button">Exit</button>
                </footer>
              </div>
            )}
            {!receipt && (
              <div className="content">
                <p>
                  A confirmation email will be sent to you so that you can
                  confirm this order. Once you have confirmed the order, it will
                  be delivered to your dorm room.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CheckoutForm;

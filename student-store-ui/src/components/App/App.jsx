import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Category from "../Category/Category";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./App.css";

export default function App() {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All Categories");
  const [filteredList, setFilteredList] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    email: "",
  });
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/store/`)
      .then((response) => {
        setProductList(response.data.products);
        setFilteredList(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getTotal();
  }, [shoppingCart]);

  const getTotal = () => {
    let newTotalPrice = 0;
    shoppingCart.map((element, index) => {
      const product = productList.find((product) => product.id === element.id);
      const newCardProduct = shoppingCart.find(
        (product) => product.id === element.id
      );
      newTotalPrice += newCardProduct.quantity * product.price;
    });
    setTotalPrice(newTotalPrice);
  };

  const catList = [
    "All Categories",
    "Clothing",
    "Food",
    "Accessories",
    "Tech",
  ].map((element, index) => {
    return (
      <Category
        key={index}
        catName={element}
        isActive={selectedCat === element}
        handleClick={() => {
          setSelectedCat(element);
          element === "All Categories"
            ? setFilteredList(
                productList.filter((product) =>
                  product.name.toLowerCase().includes(search.toLowerCase())
                )
              )
            : setFilteredList(
                productList.filter(
                  (product) =>
                    product.category === element.toLowerCase() &&
                    product.name.toLowerCase().includes(search.toLowerCase())
                )
              );
        }}
      />
    );
  });

  const handleAddItemToCart = (id) => {
    const cartProduct = shoppingCart.find((product) => product.id === id);
    if (cartProduct) {
      cartProduct.quantity = cartProduct.quantity + 1;
      //setShoppingCart(shoppingCart);
    } else setShoppingCart([...shoppingCart, { id: id, quantity: 1 }]);
    getTotal();
  };
  const handleRemoveItemToCart = (id) => {
    const cartProduct = shoppingCart.find((product) => product.id === id);
    if (cartProduct) {
      cartProduct.quantity = cartProduct.quantity - 1;
      if (cartProduct.quantity === 0) {
        const productIndex = shoppingCart.findIndex(
          (product) => product.id === id
        );
        if (productIndex !== -1) {
          shoppingCart.splice(productIndex, 1);
        }
      }
    }
    getTotal();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    selectedCat === "All Categories"
      ? setFilteredList(
          productList.filter((product) =>
            product.name.toLowerCase().includes(event.target.value)
          )
        )
      : setFilteredList(
          productList.filter(
            (product) =>
              product.category === selectedCat.toLowerCase() &&
              product.name.toLowerCase().includes(event.target.value)
          )
        );
  };

  const handleOnToggle = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };

  const handleOnCheckoutFormChange = (event) => {
    setCheckoutForm({
      ...checkoutForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleOnSubmitCheckoutForm = () => {
    setReceipt({
      name: checkoutForm.name,
      email: checkoutForm.email,
      shoppingCart: shoppingCart,
    });
    setCheckoutForm({
      name: "",
      email: "",
    });
    setShoppingCart([]);
  };

  const onProductCardClick = () => {
    setFilteredList(productList);
    setSearch("");
    setSelectedCat("All Categories");
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <div id="Start"></div>
                <Sidebar
                  isOpen={sideBarIsOpen}
                  handleOnToggle={handleOnToggle}
                  products={productList}
                  shoppingCart={shoppingCart}
                  totalPrice={totalPrice}
                  checkoutForm={checkoutForm}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                  receipt={receipt}
                />
                <Navbar />
                <Home
                  products={filteredList}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  categoryList={catList}
                  handleSearch={handleSearch}
                  shoppingCart={shoppingCart}
                  onProductCardClick={onProductCardClick}
                />
              </main>
            }
          ></Route>
          <Route
            path="/products/:productId"
            element={
              <main>
                <div id="Start"></div>
                <Sidebar
                  isOpen={sideBarIsOpen}
                  handleOnToggle={handleOnToggle}
                  products={productList}
                  shoppingCart={shoppingCart}
                  totalPrice={totalPrice}
                  checkoutForm={checkoutForm}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                  receipt={receipt}
                />
                <Navbar />
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  shoppingCart={shoppingCart}
                />
              </main>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

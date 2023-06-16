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

  useEffect(() => {
    axios
      .get(`https://codepath-store-api.herokuapp.com/store`)
      .then((response) => {
        setProductList(response.data.products);
        setFilteredList(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          console.log("!");
          setSelectedCat(element);
          element === "All Categories"
            ? setFilteredList(
                productList.filter((product) =>
                  product.name.toLowerCase().includes(search)
                )
              )
            : setFilteredList(
                productList.filter(
                  (product) =>
                    product.category === element.toLowerCase() &&
                    product.name.toLowerCase().includes(search)
                )
              );
        }}
      />
    );
  });

  const handleAddItemToCart = (productId) => {
    console.log("!");
  };
  const handleRemoveItemToCart = (productId) => {
    console.log("!");
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

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <div id="Start"></div>
                <Navbar />
                <Sidebar />
                <Home
                  products={filteredList}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  categoryList={catList}
                  handleSearch={handleSearch}
                />
              </main>
            }
          ></Route>
          <Route
            path="/products/:productId"
            element={
              <main>
                <div id="Start"></div>
                <Navbar />
                <Sidebar />
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                />
              </main>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

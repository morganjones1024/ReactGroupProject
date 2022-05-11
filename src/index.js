import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Reviews from "./components/Reviews";
import Cart from "./components/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Review from "./components/Review";

//import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  let [reviews, setReviews] = useState([]);
  let [cartItems, setcartItems] = useState([]);

  function addCart(id) {
    let newCartItems = Object.assign({}, cartItems);
    if (!newCartItems[id]) {
      newCartItems[id] = 0;
    }
    newCartItems[id]++;
    setcartItems(newCartItems);
  }
  function removeCart(id) {
    let newCartItems = Object.assign({}, cartItems);
    if (!newCartItems[id]) {
      return;
    }
    newCartItems[id]--;
    if (newCartItems[id] <= 0) {
      delete newCartItems[id];
    }
    setcartItems(newCartItems);
  }

  function addReview(productId, message, rating, reviewer) {
    let newReview = { message: message, rating: rating, reviewer: reviewer };
    let newReviews = Object.assign({}, reviews);
    if (!newReviews[productId]) {
      newReviews[productId] = [];
    }
    let reviewArray = newReviews[productId];
    reviewArray.push(newReview);
    setReviews(newReviews);
  }

  return (
    <>
      <Router>
        <Navbar></Navbar>
        
        <div>
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <ProductList addCart={addCart} removeCart={removeCart} />
                }
              />
              <Route
                path="/Review"
                element={<Review reviews={reviews} addReview={addReview} />}
              />
              <Route
                path="/reviews"
                element={<Reviews reviews={reviews} addReview={addReview} addCart={addCart} removeCart={removeCart} />}
              />
              <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

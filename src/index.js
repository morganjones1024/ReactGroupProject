import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Reviews from "./components/Reviews";
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
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route
              path="/Review"
              element={<Review reviews={reviews} addReview={addReview} />}
            />
            <Route
              path="/reviews"
              element={<Reviews reviews={reviews} addReview={addReview} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

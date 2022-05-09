import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import Review from './components/Review';

//import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <div>
        <Routes>
        <Route path ="/" element ={<ProductList/>}/>
          <Route path ="/Review" element ={<Review/>}/>
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

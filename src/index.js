import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import {BrowserRouter as Router,Link, Routes, Route} from "react-router-dom"

function App(){
  return(
    <div>
    <Navbar></Navbar>
    <div>
      <ProductList> </ProductList>

    </div>

    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>
  



</React.StrictMode>);

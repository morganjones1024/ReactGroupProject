import React from "react";

function Product(props) {
  return (
    <div>
      <h2> {props.name}</h2>
      <p>{props.description}</p>
      <h2>Price: {props.price} </h2>
      <a href="https://www.qries.com/">
        <img alt={props.name} src={props.image} width="150" height="70" />
      </a>
    </div>
  );
}

export default Product;

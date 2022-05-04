import React from "react";

function Product(props) {
  return (
    <div>
      <h2> {props.name}</h2>
      <p>"Handheld Nintendo Switch gaming at a great price"</p>
      <h2>Price: 40 </h2>
      <a href="https://www.qries.com/">
        <img
          alt="Qries"
          src="https://www.qries.com/images/banner_logo.png"
          width="150"
          height="70"
        />
      </a>
    </div>
  );
}

export default Product;

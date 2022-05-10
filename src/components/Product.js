import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Review from "./Review";
import ButtonGroup from "@mui/material/ButtonGroup";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Product(props) {
  //
  let [review, setReview] = useState(false);
  let [fullDescription, setFullDescription] = useState(false);
  const [itemCount, setItemCount] = React.useState(0);
  let navigate = useNavigate();

  //function to set the counter to increment
  function handleClick() {
    setReview(!review);
    console.log(props.id);
    navigate("/review", { state: { id: props.id } });
  }
function addCartHandler(){
  props.addCart(props.id)
    setItemCount(Math.max(itemCount + 1, 0)); 
}
function deleteCartHandler(){
  props.removeCart(props.id)
    setItemCount(Math.max(itemCount - 1, 0)); 
}

  //function to
  function handleButton() {
    console.log(fullDescription);
    setFullDescription(!fullDescription);
    console.log(fullDescription);
  }

  let description = "";
  if (fullDescription) {
    description = <p>{props.description}</p>;
  }

  let needReview = "";
  if (review) {
    needReview = <Review />;
  }
  

  return (
    <div>
      <h2> {props.name}</h2>
      {description}
      <h2>Price: {props.price} </h2>
      <img alt={props.name} src={props.image} width="150" height="70" />
      <button onClick={handleClick}>Leave a Review</button>
      <button onClick={handleButton}>Full Description</button>
      <div style={{ display: "block", padding: 30 }}>
        <div>
          <Badge color="secondary" badgeContent={itemCount}>
            <ShoppingCartIcon />{" "}
          </Badge>
          <ButtonGroup>
            <Button
              onClick={deleteCartHandler}
            >
              {" "}
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              onClick={addCartHandler}
            >
              {" "}
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
      {needReview}
    </div>
  );
}

export default Product;

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import productArray from "../model";

function Cart(props) {
  let cartList = props.cartItems;
  let cartElements = [];
  let product;
  console.log(props.cartItems);
  for (let index = 0; index < productArray.length; index++) {
    let productId = productArray[index].id;
    if (cartList[productId]) {
      let count = cartList[productId];
      product = productArray[index];
      console.log(product);

      cartElements.push(
        <div>
          <h2> Name: {product.name}</h2>
          <h2>Price: {product.price} </h2>
          <img alt={product.name} src={product.image} width="150" height="70" />
          <Badge color="secondary" badgeContent={count}>
            <ShoppingCartIcon />{" "}
          </Badge>
        </div>
      );
    }
  }
  return <>{cartElements}</>;
}

export default Cart;

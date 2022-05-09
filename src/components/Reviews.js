import Review from "./Review";
import { useNavigate, useLocation, useState } from "react-router-dom";
import Product from "../components/Product";
import productArray from "../model";



function Reviews(props) {
  let location = new useLocation();
  let id = location.state.id;
 
  //Get Product by ID
  let product = {};
  for (let i = 0; i < productArray.length; i++) {
    console.log(productArray[i].id);
    console.log(id);
    if (productArray[i].id === id) {
      let name = productArray[i].name;
      let price = productArray[i].price;
      let image = productArray[i].image;
      let description = productArray[i].description;
      product = {
        name: name,
        price: price,
        image: image,
        description: description,
      };
    }
  }

  console.log(props.reviews);
  
  let productReviews = [];
  let count=0;
  let total = 0;
  let averageRating=null
  console.log(id);
  let keys = props.reviews[id];
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    console.log(keys[i].message);
    console.log(id);
  
      let message = keys[i].message;
      console.log(message);
      let reviewer = keys[i].reviewer;
      let rating = keys[i].rating;
      
      let review = {
        message: message,
        reviewer: reviewer,
        rating: rating,
        
      };
      count ++;
      total+= parseInt(keys[i].rating);
      

      productReviews.push(review)
    
  }
 
  if (count>0){averageRating=total/count};
  let test = productReviews.map((review)=>(
    
      <div>
      <p>Rating {review.rating}</p>
      <p>Review:{review.message}</p>
      <p>Reviewer: {review.reviewer}</p>
     
      </div>
  ));
  

  return (
    <>
    <p>Product ID: {location.state.id}</p>
      <Product
        name={product.name}
        price={product.price}
        image={product.image}
        alt={product.name}
        description={product.description}
        id={product.id}
      />
    <p>Average Rating:{averageRating}</p>
     {test}
    </>
  );
}
export default Reviews;

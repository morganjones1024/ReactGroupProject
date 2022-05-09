import { useNavigate, useLocation, useState } from 'react-router-dom';
import React from 'react';



function Review(){
  let location = new useLocation();
  let messageInput = React.useRef();
  let ratingInput = React.useRef();
  let reviewerInput = React.useRef();
  let [text, setText] = React.useState([]);

  function addReview() {
    let message = messageInput.current.value;
    let rating = ratingInput.current.value;
    let reviewer = reviewerInput.current.value;
   

  }
	if (!location) {
  
		return (
    <div>
        No product found!
    </div>
    )
	} 
  // location.state.id has product id (import product list)
  
return(
  <div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input ref={reviewerInput} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Example select</label>
    <select ref={ratingInput} className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
    <textarea ref={messageInput} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <button onClick={addReview}>Submit</button>
   
  </div>
  </div>
);
}
export default Review;
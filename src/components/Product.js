import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import render from 'dom-serializer';
import Review from './Review';

function Product(props) {
	//
	let [ review, setReview ] = useState(false);
	let [ fullDescription, setFullDescription ] = useState(false);
	let navigate = useNavigate();
	
	//function to set the counter to increment
	function handleClick() {
		setReview(!review);
		navigate ("/review",  {state: {id: props.id}});
	} 

	
	
	//function to
	function handleButton() {
    console.log(fullDescription)
    setFullDescription(!fullDescription);
    console.log(fullDescription)
	}

	let description = '';
	if (fullDescription) {
		description = <p>{props.description}</p>;
	}

	let needReview = '';
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
			{needReview}
		</div>
	);
}

export default Product;

import React from "react";

export default function Product(props) {
  return (
    <div>
      <p>Product</p>
      <img className="productImage" src={props.img} alt="" />
      
      <h2> {props.name}</h2>
     <h2> {props.price}</h2>
     
    </div>
  );
}

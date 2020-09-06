import React from 'react';
import "../styles/Product.css";

const Product = (props) => {


  return (
    <article className="product">
      <h5>Meet our product:</h5> <h2>{props.name}</h2>
    </article>
  );
}

export default Product

import React from 'react';
import "../styles/Product.css";

const Product = (props) => {

  return (
    <article className="product">
      <h5>Jesteś na stronie produktu:</h5> <h2>{props.id}</h2>
    </article>
  );
}

export default Product

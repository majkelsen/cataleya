import React from 'react';
import "../styles/Product.css";

import icons from '../img/products/healtlyIcons.png'

const Product = (props) => {
  let { productData } = props
  console.log(productData)

  return (
    <article className="productSinglePageDescription">
      <div className="productTop">
        <div className='productTopLeft'>
          <div className={'productMainPhoto ' + productData.graphicName}></div>
        </div>
        <div className="productTopRight">
          <p className="productTitle">{productData.name}</p>
          <p className="productText">{productData.text}</p>
          <p className="productSize">{productData.boxSize}</p>
          <img src={icons} alt="healthly" className="healthlyIcons" />
        </div>
      </div>
      <div className="productBottom">
        <div className="productBottomUse">
          <p className="title">How To Use:</p>
          <p>{productData.howToUse}</p>
        </div>
        <div className="productBottomIngredients">
          <p className="title">Ingredients:</p>
          {productData.ingredients.map(ingredient => <p>{ingredient}</p>)}
        </div>
        <div className="productBottomContact">
          <a href="/contact"><p>Contact Us</p><p>for Distribiutor close to You </p></a>
        </div>
      </div>
    </article>
  );
}

export default Product

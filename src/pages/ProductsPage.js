import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ProductsPage.css";

const products = ["super-piguła", "mocny-kop", "coś-na-lenia"]

const ProductsPage = () => {

  const productsList = products.map(product => (
    <li key={product} className={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ))


  return (
    <div className="ProductsPage">

      <article className="first">
        <div><h2>Lista produktów</h2></div>
      </article>

      <article className="productsGraphics">
        <div>
          <ul>
            {productsList}
          </ul>
        </div>
      </article>
    </div>
  )
}

export default ProductsPage;
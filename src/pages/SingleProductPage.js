import React from 'react';
import Product from '../components/Product'
import { Link } from 'react-router-dom';
import "../styles/SingleProductPage.css";

const SingleProductPage = ({ match }) => {
  return (
    <div className="SingleProductPage">

      <article className="first">
        <Product id={match.params.id} />
        <Link to="/products">Powrót do listy produktów</Link>
      </article>

    </div>

  )
}

export default SingleProductPage;
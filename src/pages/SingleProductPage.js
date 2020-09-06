import React from 'react';
import Product from '../components/Product'
import { Link } from 'react-router-dom';
import "../styles/SingleProductPage.css";

const SingleProductPage = ({ match }) => {


  return (
    <div className="singleProductPage">
      <article className="first">
        <div>Your Wellbeing is Our Aspiration</div>
      </article>


      <section className="productPageDescription">
        <Product name={match.params.name} />

        <Link to="/products" className='backToProducts'>View All Products</Link>
      </section>



    </div>

  )
}

export default SingleProductPage;
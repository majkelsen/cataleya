import React from 'react';
import Product from '../components/Product'
import { Link } from 'react-router-dom';
import "../styles/SingleProductPage.css";

const products = [
  {
    id: "green-coffee",
    name: "Green Coffee",
    text: "Green coffee bean extract contains several bioactive compounds, including caffeine and chlorogenic acids, which account for its healthful antioxidant and metabolism booster properties. Chlorogenic acid helps with weight loss and support healthy lifestyle",
    graphicName: "productGreenCoffee",
    boxSize: "Box 20 x 5 ml",
    howToUse: "Dilute 1 ampule i 1,5l of water and dring during the day ",
    ingredients: ["Green coffee bean extract", "Aroma of berries", "Potasium sorbate", "Aqua"]
  },
]

const SingleProductPage = ({ match }) => {

  let selectedProduct = products.filter(product => product.id === match.params.name)
  selectedProduct = selectedProduct[0]

  return (
    <div className="singleProductPage">
      <article className="first">
        <div>Your Wellbeing is Our Aspiration</div>
      </article>


      <section className="productPageDescription">
        <Product productData={selectedProduct} />

        <Link to="/products" className='backToProducts'>View All Products</Link>
      </section>


      <div className="bgImage"></div>
    </div>

  )
}

export default SingleProductPage;
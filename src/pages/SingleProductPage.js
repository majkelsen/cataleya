import React from 'react';
import Product from '../components/Product'
import { Link } from 'react-router-dom';
import "../styles/SingleProductPage.css";

const products = [
  {
    id: "green-coffee",
    name: "Green Coffee",
    text: "Green coffee bean extract contains several bioactive compounds. Including chlorogenic acids, which accounts for its healthful antioxidant and metabolism booster properties. Chlorogenic acid helps with weight loss and support healthy lifestyle.",
    graphicsNames: ["greenCoffee.jpg", "a1.png", "a2.png", "a3.png", "a4.png", "a5.png"],
    boxSize: "Box 20 x 5 ml",
    howToUse: "Dilute 1 AMPULE in 1.5 L of water, and drink during the day",
    ingredients: ["Green coffee bean extract", "Aroma of berries", "Potassium sorbate", "Aqua"]
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
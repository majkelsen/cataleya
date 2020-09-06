import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ProductsPage.css";

const products = [
  { id: 1, link: "super-pigula", name: "Super Piguła", text: "Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi", graphicName: "productSuperPiguła" },
  { id: 2, link: "mocny-kop", name: "Mocny Kop", text: "Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi", graphicName: "productMocnyKop" },
  { id: 3, link: "cos-na-lenia", name: "Coś Na Lenia", text: "Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi", graphicName: "productCosNaLenia" },
  { id: 4, link: "mocarny-mocarz", name: "Mocarny Mocarz", text: "Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi", graphicName: "productMocarnyMocarz", unavailable: "true" },
]

const ProductsPage = () => {

  const productsList = products.map(product => (
    <li key={product.id} className='productBox'>
      <Link to={`/products/${product.link}`} className={'productPhoto ' + product.graphicName} unavailable={product.unavailable}> </Link>
      <div className="productDescription">
        <div className='productName'>{product.name}</div>
        <div className="productTitle">Product Description:</div>
        <div className="productText">{product.text}</div>
      </div>
    </li >
  ))


  return (
    <div className="ProductsPage">

      <article className="first">
        <div>Your Wellbeing is Our Aspiration</div>
      </article>

      <article className="productsGraphics">
        <div><h3>Our Products</h3></div>
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
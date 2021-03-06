import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ProductsPage.css";

const products = [
  { id: 1, link: "green-coffee", name: "Green Coffee", text: "Green coffee bean extract contains several bioactive compounds, including caffeine and chlorogenic acids, which account for its healthful antioxidant and metabolism booster properties. Chlorogenic acid helps with weight loss and support healthy lifestyle", shortText: "metabolism booster + antioxidant + weight loss support", graphicName: "greenCoffee" },
  { id: 2, link: "deoxycholic-10", name: "Deoxycholic 10%", text: "Deoxycholic acid as an active ingredient is used to help decrease the appearance of fat in areas such as thighs, buttocks, abdomen and double-chin. Sodium Deoxycholate is handling emulsification process of fats for the absorption in the intestine by breaking down cells in fatty tissue. ", shortText: "fat appearance + fat absorption in specific areas+Cellulite", graphicName: "productDeoxycholic10" },
  { id: 3, link: "triple-boost", name: "Triple Boost", text: "The ampules of Triple Boost cause an intense tensor effect. With reaffirming and moisturising properties that decreases the sensation of tiredness and fatigue. It is used to reduce wrinkles and prevent facial flaccidness providing elasticity and brighteness to the skin.", shortText: "lifting effect +Moisturizing +anti-aging", graphicName: "productTripleBoost" },
  { id: 4, link: "whitening-peel", name: "Whitening Peel", text: "Whitening peel is a specialised solution combined with forceful composition of Arbutin Citric Acid, Lactic Acid, Kojic Acid, Salicylic Acid. Its formulated with active depigmentation, antioxidants and anti-ageing agents. It helps lightens sun damaged skin, reduces stretch marks, acne scars, blackheads, tightening and lightening Skin.", shortText: "Hyperpigmentation + whitening effect", graphicName: "productWhiteningPeel" },
]

const ProductsPage = () => {

  const productsList = products.map(product => (
    <li key={product.id} className='productBox'>
      {product.unavailable ?
        <Link to={`/products`} className={'productPhoto'} unavailable={product.unavailable}>
          <img src={require(`../img/products/${product.name}/min${product.graphicName}.jpg`)} alt="photoMain" /> </Link>
        :
        <Link to={`/products/${product.link}`} className={'productPhoto'} unavailable={product.unavailable}>
          <img src={require(`../img/products/${product.name}/min${product.graphicName}.jpg`)} alt="photoMain" />
        </Link>}
      <div className="productDescription">
        <div className='productName'>{product.name}</div>
        {/* <div className="productTitle">Product Description:</div>
        <div className="productText">{product.shortText}</div> */}
      </div>
    </li >
  ))


  return (
    <div className="ProductsPage">

      <article className="first">
        <div>Your Wellbeing is Our Aspiration</div>
      </article>

      <article className="productsGraphics">
        <div>
          <ul>
            {productsList}
          </ul>
        </div>
      </article>

      <div className="bgImage"></div>
    </div>
  )
}

export default ProductsPage;
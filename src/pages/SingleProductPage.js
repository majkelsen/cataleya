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
    recommendedFor: "Helps to reduce weight loss and lower blood sugar. Combats the process of aging, neutralizing free radicals caused by oxidative stress.",
    effects: "Helps stimulate weight loss, lowers blood sugar levels and fight the aging process by neutralizing free radicals caused by oxidative Stress. Contributes with antioxidant properties, acting on the aging and process and neutralizing free radicals to prevent health problems caused by stress. For weight loss, clorogenic acid in Green Coffee will influence the way the body will absorb sugar in the blood and cellular metabolism.",
    boxSize: "Box 20 x 5 ml",
    healthyIcons: true,
    howToUse: "Dilute 1 AMPULE in 1.5 L of water, and drink during the day. " + 'For best results use for 3 months',
    ingredients: ["Green coffee bean extract", "Aroma of berries", "Potassium sorbate", "Aqua"],
    fullIngredients: true,
  },
  {
    id: "deoxycholic-10",
    name: "Deoxycholic 10%",
    text: "Deoxycholic acid as an active ingredient is used to help decrease the appearance of fat in areas such as thighs, buttocks, abdomen and double-chin. Sodium Deoxycholate is handling emulsification process of fats for the absorption in the intestine by breaking down cells in fatty tissue. Recommended for: Thighs, buttocks, abdomen and double chin Cellulite Localized fat.",
    graphicsNames: ["productDeoxycholic10.jpg"],
    recommendedFor: "Thighs, buttocks, abdomen and double chin, Cellulite, Localized fat.",
    effects: "Fat and volume reduction Improvement in cellulite appearance.",
    boxSize: "Box 5 X 10 ml Vials",
    howToUse: "Apply the product in the area to be treated with circular movement massage or add it to a cream / mask Add the product to a gel intended for use in Transdermic Mesotherapy or other type of electrotherapy treatment such as ultrasounds, ionization or other types of medical devices used in aesthetic treatments This procedure is not recommended for pregnant women, nursing mothers, obese or diabetic patients, autoimmune diseases, vascular complications, or infections of any kind.",
    ingredients: ["Sodium Deoxycholate"]
  },
  {
    id: "triple-boost",
    name: "Triple Boost",
    text: "The ampules of Triple Boost cause an intense tensor effect. With reaffirming and moisturising properties that decreases the sensation of tiredness and fatigue. It is used to reduce wrinkles and prevent facial flaccidness providing elasticity and brighteness to the skin. Antioxidant properties are helping prevent and reduce photoaging and they deeply hydrate skin.",
    graphicsNames: ["productTripleBoost.jpg", "a1.jpg"],
    recommendedFor: "All skin types. Great benefits for mature skin. Facial massage",
    effects: "Lifting effect . Moisturized and brighten skin",
    boxSize: "Box 20 X 2 ml Ampoules",
    howToUse: "Apply on the face and neck, with a soft massage, twice per week . Daily application for an intensive treatment . Cleanse and tone the skin before the application.",
    ingredients: ["Ascorbic Acid", "Ascorbyl Palmitate", "Hydrolysed Elastin", "Solubie Collagen", "Hydrolized Wheat Gluten", "Mimosa Tenulflora Leaf Extract"]
  },
  {
    id: "whitening-peel",
    name: "Whitening Peel",
    text: "Whitening peel is a specialised solution combined with forceful composition of Arbutin Citric Acid, Lactic Acid, Kojic Acid, Salicylic Acid. Its formulated with active depigmentation, antioxidants and anti-ageing agents. It helps lighten sun damaged skin, reduces stretch marks, acne scars, blackheads, tightening and lightening Skin. Its exfoliating action effectively takes away layers of dull, discoloured skin cells to reveal, lighter, fresher skin.",
    graphicsNames: ["productWhiteningPeel.jpg"],
    recommendedFor: "Hyperpigmentation treatments",
    effects: "Whitening effect",
    boxSize: "Bottle 100 ml",
    howToUse: "Apply after deep cleansing of the skin. Maximum time of exposure: 5minutes. Neutralize and remove with cold water",
    ingredients: ["Arbutin Citric Acid", "Lactic Acid", "Kojic Acid", "Salicylic Acid"]
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
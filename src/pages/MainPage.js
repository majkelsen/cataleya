import React from 'react';
import "../styles/MainPage.css";
import { Parallax } from 'react-parallax';
import { Component } from 'react';

import { NavLink } from 'react-router-dom';

import productPhoto from '../img/mainPageSingleProductImage.png'

class MainPage extends Component {

  //get reference to element to which will be scrolled
  myArticleToFocus = React.createRef()
  //scrolling function to directed element
  scrollDown = () => {
    if (this.myArticleToFocus.current) {
      this.myArticleToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  render() {
    return (
      <div className="homeArticles">

        <article className="title">
          <Parallax
            bgImage={require('../img/firstMain.png')}
            bgImageAlt="image"
            strength={300}
          ><div style={{
            height: '100vh',
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }} />

          </Parallax>
          <div className="motto">
            <p className="mottoFirst">
              <i className="mottoFirstPartOne">Your</i> daily
          </p>
            <p className="mottoSecond">
              <i className="mottoSecondPartOne">healt &</i>beauty
          </p>
            <p className="mottoThird">companion</p>
          </div>

          <div className="arrowDown" onClick={this.scrollDown}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </article>

        <article className="mainAboutUsArticle" ref={this.myArticleToFocus}>
          <div className="aboutUsBox">
            <div className="aboutUsLabel">What Drive's Us</div>
            <div className="aboutUsTextBox">
              <div className="aboutUsFirstText">
                <div className="aboutUsText"> The legacy of InannaLab comes from ancient Sumer goddess Inanna who was worshiped as Queen of Heaven. She was associated with Venus and her symbol of beauty.
            </div>
              </div>

              <div className="aboutUsSecondText">
                <div className="aboutUsText">Creating an innovative and advanced products, is what we want promise to you.
          </div>
              </div>
              <div className="aboutUsThirdText">
                <div className="aboutUsText">It is with this inspiration that we created Cataleya, a progressive compilation of products to reveal, renew and re-define the authentic form of age- defying beauty.
          </div>
              </div>
            </div>
            <div className="dots">
              <div className="dotsFirst">
                <i className="fas fa-circle"></i>
                <i className="far fa-circle"></i>
                <i className="far fa-circle"></i>
              </div>
              <div className="dotsSecond">
                <i className="far fa-circle"></i>
                <i className="fas fa-circle"></i>
                <i className="far fa-circle"></i>
              </div>
              <div className="dotsThird">
                <i className="far fa-circle"></i>
                <i className="far fa-circle"></i>
                <i className="fas fa-circle"></i>
              </div>
            </div>
          </div>
        </article>


        <article className="third">
          <div className='characteristics'>
            <div className="firstCharacteristics">
              <div className="characteristicsBg"></div>
              <div className="characteristicsText">
                <i className="fas fa-hand-holding-heart"></i>
                <p>Spirit</p>
            Our complete dedication to the customer's needs and satisfaction is what makes us unique. We are committed to do what it takes to succeed and deliver great results.
            </div></div>
            <div className="secondCharacteristics">
              <div className="characteristicsBg"></div>
              <div className="characteristicsText">
                <i className="fas fa-burn"></i>
                <p>Passion</p>
            It’s passion that holds our standards high.
            Is a testimony of our engagement and dedication in what we are doing. With passion we seek the best and commit to it.
            </div></div>
            <div className="thirdCharacteristics">
              <div className="characteristicsBg"></div>
              <div className="characteristicsText">
                <i className="fas fa-link"></i>
                <p>Integrity</p>
            We are not waisting our time by keeping up appearances.
            We put out time and effort towards exceptional products that we promise to deliver.
            </div></div>
          </div>
        </article>

        <article className="mainMottoAricle" >
          <div>Beauty To Us Is About Being Comfortable In Your Own Skin.
            <p>FOR US ITS A COMMITMENT </p>
            <p>FOR YOU ITS AN ASSET! </p>
          </div>
        </article>

        <article className="mainProduckRedirectionArticle">
          <div className='productRedirection'>
            <div className="redirectionProductPhoto">
              <img src={productPhoto} alt="productPhoto" />
            </div>
            <div className="redirectioArticleText">
              <p>Our All Products</p>

              <NavLink to="./products" exact className="refToProductsButton">Read More</NavLink>
            </div>
          </div>
        </article>

        <article className="mainLastPhotoArticle">
          <Parallax
            bgImage={require('../img/thirdMain.png')}
            bgImageAlt="image"
            strength={400}
          ><div style={{
            height: '600px'
          }} />
          </Parallax>
        </article>

      </div>
    )
  }
}


export default MainPage;
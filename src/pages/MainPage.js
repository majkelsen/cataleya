import React from 'react';
import "../styles/MainPage.css";
import { Parallax } from 'react-parallax';
import { Component } from 'react';

import { NavLink } from 'react-router-dom';

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
    // const hearthImage = 

    return (
      <div className="homeArticles">

        <article className="title">
          <Parallax
            bgImage={require('../img/firstMain.png')}
            bgImageAlt="image"
            strength={300}
          ><div style={{
            height: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }} />

          </Parallax>
          <div className="motto">
            <p className="mottoFirst">
              <i className="mottoFirstPartOne">Your</i> daily
          </p>
            <p className="mottoSecond">
              <i className="mottoSecondPartOne">health &</i>beauty
          </p>
            <p className="mottoThird">companion</p>
          </div>

          <div className="arrowDown" onClick={this.scrollDown}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </article>

        <article className="mainAboutUsArticle" ref={this.myArticleToFocus}>
          <div className="aboutUsBox">
            <div className="aboutUsLabel">Our Aspiration</div>
            <div className="aboutUsTextBox">
              <div className="aboutUsFirstText">
                <div className="aboutUsText"> The inspiration of InannaLab is derived from the ancient Somerian name Inanna, the deity of love and procreation.
            </div>
              </div>

              <div className="aboutUsSecondText">
                <div className="aboutUsText"> Delivering these innovative and health-driven products is what we promise you.
          </div>
              </div>
              <div className="aboutUsThirdText">
                <div className="aboutUsText"> Cataleya, is the progressive compilation of products that helps reveal, renew and re-define the authentic form of age-defying beauty.
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
          <div className="space"><div className="characteristicsBg"></div></div>
          <div className='characteristics'>
            <div className="firstCharacteristics trait">
              <div className="characteristicsBg"></div>
              <div className="characteristicsText">
                <img src={require('../img/passionate.png')} alt="icon" className="characteristicsIcons" />
                <p>Spirit</p>
                The dedication to our customer's needs and satisfaction is what makes us unique. We are committed to provide both success astonishing results.
            </div></div>
            <div className="secondCharacteristics trait">
              <div className="characteristicsBg"></div>
              <div className="characteristicsText">
                <img src={require('../img/lotus.png')} alt="icon" className="characteristicsIcons" />
                <p>Passion</p>
                Is what holds our standards high, the testimony of our engagement and dedication in what we are doing. Seeking the best and committing to it.
            </div></div>
            <div className="thirdCharacteristics trait">
              <div className="characteristicsBg"></div>
              <div className="characteristicsText">
                <img src={require('../img/puzzle-pieces.png')} alt="icon" className="characteristicsIcons" />
                <p>Integrity</p>
                We have paved our path through strong belief in both health and beauty aspect from inside and out ensuring our client’s satisfaction and appreciation.
            </div></div>
          </div>
          <div className="space"><div className="characteristicsBg"></div></div>
        </article>

        {/* <article className="mainMottoAricle" >
          <div>
            <img src={require('../img/text.png')} alt="motto" className="firstMotto" />
          </div>
        </article> */}

        <article className="mainProduckRedirectionArticle">
          <div className='productRedirection'>
            <div className="redirectionProductPhoto">
              <img src={require('../img/text.png')} alt="motto" className="firstMotto" />
            </div>
            <div className="redirectioArticleText">
              <p>Our Products</p>

              <NavLink to="./products" exact className="refToProductsButton">Read More</NavLink>
            </div>
          </div>
        </article>

        <article className="mainLastPhotoArticle">
          <Parallax
            bgImage={require('../img/thirdMain.png')}
            bgImageAlt="image"
            strength={400}
          ><div className="lastPhotoBg" style={{
            height: '600px'
          }} />
          </Parallax>
        </article>

      </div>
    )
  }
}


export default MainPage;
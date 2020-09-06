import React from 'react';
import "../styles/MainPage.css";
import { Parallax } from 'react-parallax';

const MainPage = () => {
  return (
    <div className="homeArticles">

      <article className="title">
        <div>
          <p className="mottoFirst">
            <p className="mottoFirstPartOne">Your</p> daily
          </p>
          <p className="mottoSecond">
            <p className="mottoSecondPartOne">healt &</p>beauty
          </p>
          <p className="mottoThird">companion</p>
        </div>
      </article>

      <article className="second">
        <div>BAJDUŻONKO</div>
      </article>

      <article className="third">
        <div>TAKI SE O <br></br>SCROLOWANY <br></br>OBRAZEK</div>
      </article>

      <article className="forth">
        <div>COSIK SE TU PISZE</div>
      </article>

      <article className="five">
        <div>TU TEŻ</div>
      </article>

      <article className="six">
        <div>NO I TU TEŻ</div>
      </article>

      <article className="seven">
        <Parallax
          bgImage={require('../img/thirdMain.png')}
          bgImageAlt="image"
          strength={300}
        ><div style={{ height: '700px' }} />
        </Parallax>
      </article>

    </div>
  )
}


export default MainPage;